// ============================================
// comments.js — 评论区模块
// 依赖：auth.js 已加载（authClient 已存在）
// 表名：profiles（你的用户表）
// ============================================

(function () {
  // ── 复用 auth.js 里的 authClient，不重复建连接 ──
  function getClient() {
    if (window.authClient) return window.authClient;
    // 兜底：如果 authClient 还没初始化，稍后重试
    return null;
  }

  // ── 状态 ──
  let currentUser = null;   // { id, nickname, is_teacher }
  let replyingTo  = null;   // { id, nickname }
  let commentsData = [];
  let likedSet     = new Set();
  let commentsLoaded = false;
  let realtimeChannel = null;

  // ── 昵称生成（基于 uuid，固定不变） ──
  function generateNickname(uuid) {
    const adj    = ['飞奔的','困惑的','暴躁的','淡定的','神秘的',
                    '迷路的','打盹的','亢奋的','哲学的','佛系的',
                    '发呆的','碎碎念的','认真的','随缘的','努力的'];
    const animal = ['熊猫','柴犬','羊驼','水豚','猫头鹰',
                    '仓鼠','企鹅','懒猴','海獭','土拨鼠',
                    '小浣熊','狐狸','树懒','鸭嘴兽','仓鸮'];
    const hash = uuid.replace(/-/g, '').slice(0, 8);
    const num  = parseInt(hash, 16);
    const a    = adj[num % adj.length];
    const b    = animal[Math.floor(num / adj.length) % animal.length];
    const suf  = (num % 900) + 100;
    return `${a}${b}${suf}`;
  }

  // ── 时间格式化 ──
  function formatTime(isoStr) {
    const d    = new Date(isoStr);
    const now  = new Date();
    const diff = Math.floor((now - d) / 1000);
    if (diff < 60)    return '刚刚';
    if (diff < 3600)  return Math.floor(diff / 60) + ' 分钟前';
    if (diff < 86400) return Math.floor(diff / 3600) + ' 小时前';
    if (diff < 86400 * 7) return Math.floor(diff / 86400) + ' 天前';
    return d.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
  }

  // ── 获取当前用户信息 ──
  async function loadCurrentUser() {
    const db = getClient();
    if (!db) return null;

    // 访客不能发评论，但能看
    if (localStorage.getItem('isGuest') === 'true') return null;

    const myToken = localStorage.getItem('my_session_token');
    if (!myToken) return null;

    const { data: profile } = await db
      .from('profiles')
      .select('id, is_teacher, nickname')
      .eq('session_token', myToken)
      .maybeSingle();

    if (!profile) return null;

    // 没有昵称就生成并存回去
    if (!profile.nickname) {
      const nick = generateNickname(profile.id);
      await db.from('profiles').update({ nickname: nick }).eq('id', profile.id);
      profile.nickname = nick;
    }

    return {
      id:         profile.id,
      nickname:   profile.is_teacher ? '老师' : profile.nickname,
      is_teacher: profile.is_teacher || false
    };
  }

  // ── 加载评论 ──
  async function loadComments() {
    const db = getClient();
    if (!db) return;

    const lessonId = new URLSearchParams(window.location.search).get('id');
    const { data } = await db
      .from('comments')
      .select('*')
      .eq('lesson_id', lessonId)
      .order('is_pinned',   { ascending: false })
      .order('created_at',  { ascending: true });

    commentsData = data || [];

    // 获取当前用户的点赞记录
    if (currentUser) {
      const { data: likes } = await db
        .from('comment_likes')
        .select('comment_id')
        .eq('user_id', currentUser.id);
      likedSet = new Set((likes || []).map(l => l.comment_id));
    }

    renderComments();
    updateCommentCount();
  }

  // ── 渲染评论列表 ──
  function renderComments() {
    const list = document.getElementById('commentList');
    if (!list) return;

    const topLevel = commentsData.filter(c => !c.parent_id);

    if (topLevel.length === 0) {
      list.innerHTML = `
        <div style="text-align:center;color:#bbb;padding:40px 20px;font-size:14px;line-height:2;">
          <div style="font-size:36px;margin-bottom:8px;">🐼</div>
          还没有评论，来第一个留言吧！
        </div>`;
      return;
    }

    list.innerHTML = topLevel.map(c => renderCard(c)).join('');
  }

  function renderCard(comment, isReply) {
    isReply = isReply || false;
    const replies   = commentsData.filter(c => c.parent_id === comment.id);
    const isLiked   = likedSet.has(comment.id);
    const isOwn     = currentUser && currentUser.id === comment.user_id;
    const isTeacher = currentUser && currentUser.is_teacher;
    const timeStr   = formatTime(comment.created_at);

    const avatarBg   = comment.is_teacher_reply ? '#A77046' : '#6CAD9C';
    const avatarIcon = comment.is_teacher_reply ? '👩‍🏫' : '🐼';

    const nameHtml = comment.is_teacher_reply
      ? `<span style="color:#A77046;font-weight:900;font-size:14px;">👩‍🏫 老师</span>`
      : `<span style="font-weight:700;color:#612321;font-size:14px;">${escHtml(comment.nickname)}</span>`;

    const pinnedBadge = comment.is_pinned
      ? `<span style="background:#fef3c7;color:#d97706;font-size:10px;
           padding:2px 7px;border-radius:10px;font-weight:bold;margin-left:6px;">📌 置顶</span>`
      : '';

    const teacherBtn = isTeacher && !isReply ? `
      <button onclick="window.__comments.togglePin('${comment.id}',${comment.is_pinned})"
        class="cm-action-btn" title="${comment.is_pinned ? '取消置顶' : '置顶'}">
        ${comment.is_pinned ? '取消置顶' : '📌 置顶'}
      </button>` : '';

    const deleteBtn = (isOwn || isTeacher) ? `
      <button onclick="window.__comments.deleteComment('${comment.id}')"
        class="cm-action-btn cm-delete-btn" title="删除">
        删除
      </button>` : '';

    const replyBtn = currentUser ? `
      <button onclick="window.__comments.startReply('${comment.id}','${escAttr(comment.nickname)}')"
        class="cm-action-btn cm-reply-btn">
        <i class="fas fa-reply" style="font-size:11px;"></i> 回复
      </button>` : '';

    const cardBg    = comment.is_pinned ? '#fffdf5' : (isReply ? '#f9fafb' : '#ffffff');
    const cardBorder = comment.is_pinned
      ? '1px solid #fde68a'
      : (isReply ? '1px solid #f0f0f0' : '1px solid #eee');

    return `
      <div id="comment-${comment.id}"
        style="background:${cardBg};border-radius:${isReply ? '8px' : '12px'};
        padding:14px 15px;border:${cardBorder};transition:box-shadow 0.2s;"
        onmouseover="this.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)'"
        onmouseout="this.style.boxShadow='none'">

        <div style="display:flex;gap:10px;align-items:flex-start;">
          <!-- 头像 -->
          <div style="width:34px;height:34px;border-radius:50%;background:${avatarBg};
            display:flex;align-items:center;justify-content:center;
            font-size:17px;flex-shrink:0;margin-top:1px;">
            ${avatarIcon}
          </div>

          <div style="flex:1;min-width:0;">
            <!-- 姓名行 -->
            <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-bottom:6px;">
              ${nameHtml}${pinnedBadge}
              <span style="color:#bbb;font-size:11px;margin-left:auto;">${timeStr}</span>
            </div>

            <!-- 正文 -->
            <div style="font-size:14px;color:#333;line-height:1.7;word-break:break-word;">
              ${escHtml(comment.content)}
            </div>

            <!-- 操作栏 -->
            <div style="display:flex;align-items:center;gap:6px;margin-top:10px;flex-wrap:wrap;">
              <button onclick="window.__comments.toggleLike('${comment.id}')"
                style="background:none;border:none;cursor:pointer;font-size:13px;
                color:${isLiked ? '#ef4444' : '#ccc'};padding:0;
                display:flex;align-items:center;gap:4px;transition:color 0.2s;"
                onmouseover="this.style.color='#ef4444'"
                onmouseout="this.style.color='${isLiked ? '#ef4444' : '#ccc'}'">
                <i class="fas fa-heart"></i>
                <span id="likes-${comment.id}">${comment.likes || 0}</span>
              </button>
              ${replyBtn}
              ${teacherBtn}
              ${deleteBtn}
            </div>
          </div>
        </div>

        <!-- 子回复 -->
        ${replies.length > 0 ? `
          <div style="margin-top:10px;margin-left:44px;display:flex;flex-direction:column;gap:8px;">
            ${replies.map(r => renderCard(r, true)).join('')}
          </div>` : ''}
      </div>`;
  }

  // ── 发送评论 ──
  async function submitComment() {
    if (!currentUser) {
      alert('请先登录后再发表评论 🐼');
      return;
    }
    const db = getClient();
    if (!db) return;

    const textarea = document.getElementById('commentTextarea');
    const content  = (textarea.value || '').trim();
    if (!content) return;
    if (content.length > 500) { alert('评论最多 500 字哦'); return; }

    const btn = document.getElementById('commentSubmitBtn');
    btn.disabled = true;
    btn.textContent = '发送中...';

    const lessonId = new URLSearchParams(window.location.search).get('id');
    const { error } = await db.from('comments').insert({
      lesson_id:        lessonId,
      user_id:          currentUser.id,
      nickname:         currentUser.nickname,
      content:          content,
      parent_id:        replyingTo ? replyingTo.id : null,
      is_teacher_reply: currentUser.is_teacher
    });

    btn.disabled = false;
    btn.textContent = '发送';

    if (!error) {
      textarea.value = '';
      cancelReply();
      await loadComments();
      // 滚动到最新
      const list = document.getElementById('commentList');
      if (list) list.scrollTop = list.scrollHeight;
    } else {
      alert('发送失败，请稍后再试');
    }
  }

  // ── 回复 ──
  function startReply(commentId, nickname) {
    replyingTo = { id: commentId, nickname };
    const textarea = document.getElementById('commentTextarea');
    textarea.placeholder = `回复 ${nickname}...`;
    textarea.focus();

    let tip = document.getElementById('replyTip');
    if (!tip) {
      tip = document.createElement('div');
      tip.id = 'replyTip';
      const area = document.getElementById('commentInputArea');
      area.insertBefore(tip, textarea);
    }
    tip.innerHTML = `
      <div style="font-size:12px;color:#6CAD9C;margin-bottom:6px;
        display:flex;align-items:center;gap:6px;padding:4px 0;">
        <i class="fas fa-reply"></i> 正在回复 <b>${escHtml(nickname)}</b>
        <span onclick="window.__comments.cancelReply()"
          style="margin-left:auto;cursor:pointer;color:#bbb;font-size:16px;line-height:1;">×</span>
      </div>`;
  }

  function cancelReply() {
    replyingTo = null;
    const textarea = document.getElementById('commentTextarea');
    if (textarea) textarea.placeholder = '分享学习感受，或者向老师提问 🐼';
    const tip = document.getElementById('replyTip');
    if (tip) tip.remove();
  }

  // ── 点赞 ──
  async function toggleLike(commentId) {
    if (!currentUser) { alert('请先登录'); return; }
    const db = getClient();
    if (!db) return;

    const comment = commentsData.find(c => c.id === commentId);
    if (!comment) return;

    if (likedSet.has(commentId)) {
      await db.from('comment_likes').delete()
        .eq('user_id', currentUser.id).eq('comment_id', commentId);
      const newCount = Math.max(0, (comment.likes || 1) - 1);
      await db.from('comments').update({ likes: newCount }).eq('id', commentId);
      likedSet.delete(commentId);
      comment.likes = newCount;
    } else {
      await db.from('comment_likes').insert({ user_id: currentUser.id, comment_id: commentId });
      const newCount = (comment.likes || 0) + 1;
      await db.from('comments').update({ likes: newCount }).eq('id', commentId);
      likedSet.add(commentId);
      comment.likes = newCount;
    }

    // 只更新点赞数，不重渲整个列表（更流畅）
    const span = document.getElementById('likes-' + commentId);
    if (span) span.textContent = comment.likes;
    const heartBtn = span && span.parentElement;
    if (heartBtn) heartBtn.style.color = likedSet.has(commentId) ? '#ef4444' : '#ccc';
  }

  // ── 置顶 ──
  async function togglePin(commentId, currentPinned) {
    if (!currentUser || !currentUser.is_teacher) return;
    const db = getClient();
    await db.from('comments').update({ is_pinned: !currentPinned }).eq('id', commentId);
    await loadComments();
  }

  // ── 删除 ──
  async function deleteComment(commentId) {
    if (!confirm('确定删除这条评论？')) return;
    const db = getClient();
    await db.from('comments').delete().eq('id', commentId);
    await loadComments();
  }

  // ── 更新按钮上的数量 ──
  function updateCommentCount() {
    const total = commentsData.length;
    const el = document.getElementById('commentCount');
    if (!el) return;
    if (total > 0) {
      el.textContent = total;
      el.style.display = 'inline-block';
    } else {
      el.style.display = 'none';
    }
  }

  // ── Realtime 订阅 ──
  function subscribeRealtime() {
    const db = getClient();
    if (!db) return;
    const lessonId = new URLSearchParams(window.location.search).get('id');
    if (realtimeChannel) db.removeChannel(realtimeChannel);
    realtimeChannel = db.channel('comments-' + lessonId)
      .on('postgres_changes', {
        event: '*', schema: 'public', table: 'comments',
        filter: `lesson_id=eq.${lessonId}`
      }, () => loadComments())
      .subscribe();
  }

  // ── 展开 / 收起评论区 ──
  async function toggleComments() {
    const panel = document.getElementById('commentPanel');
    const btn   = document.getElementById('commentBtn');
    if (!panel) return;

    const isHidden = panel.style.display === 'none' || panel.style.display === '';
    if (isHidden) {
      // 首次打开时注入 HTML 结构
      if (!commentsLoaded) {
        panel.innerHTML = `
          <div style="background:#f9f7f2;border-top:2px solid #e5cc84;
               padding:16px 20px 24px;box-sizing:border-box;border-radius:0 0 12px 12px;">

            <!-- 发评论框 -->
            <div id="commentInputArea"
              style="background:#fff;border-radius:12px;padding:14px 15px;
                     margin-bottom:14px;border:1px solid #eee;
                     box-shadow:0 2px 8px rgba(0,0,0,0.04);">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                <div style="width:34px;height:34px;border-radius:50%;background:#6CAD9C;
                  display:flex;align-items:center;justify-content:center;
                  font-size:18px;flex-shrink:0;">🐼</div>
                <span id="myNicknameLabel"
                  style="font-weight:bold;color:#612321;font-size:14px;">加载中...</span>
              </div>
              <textarea id="commentTextarea"
                placeholder="分享学习感受，或者向老师提问 🐼"
                maxlength="500"
                style="width:100%;min-height:72px;padding:10px 12px;
                       border:1.5px solid #eee;border-radius:8px;
                       font-size:14px;resize:vertical;font-family:inherit;
                       box-sizing:border-box;outline:none;
                       transition:border-color 0.2s;color:#333;background:#fafafa;"
                onfocus="this.style.borderColor='#6CAD9C';this.style.background='#fff'"
                onblur="this.style.borderColor='#eee';this.style.background='#fafafa'">
              </textarea>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
                <span style="font-size:11px;color:#ccc;">最多 500 字</span>
                <button id="commentSubmitBtn"
                  onclick="window.__comments.submitComment()"
                  style="padding:7px 22px;background:#6CAD9C;color:white;
                         border:none;border-radius:20px;font-weight:bold;
                         cursor:pointer;font-size:14px;transition:all 0.2s;font-family:inherit;"
                  onmouseover="this.style.background='#5a9b8a'"
                  onmouseout="this.style.background='#6CAD9C'">发送</button>
              </div>
            </div>

            <!-- 评论列表 -->
            <div id="commentList"
              style="display:flex;flex-direction:column;gap:10px;">
              <div style="text-align:center;color:#bbb;padding:30px;">
                <i class="fas fa-spinner fa-spin"></i> 加载中...
              </div>
            </div>
          </div>`;
      }

      panel.style.display = 'block';
      if (btn) {
        btn.style.borderColor = '#5a9b8a';
        btn.style.background  = '#eaf6f4';
      }

      if (!commentsLoaded) {
        currentUser = await loadCurrentUser();
        const label = document.getElementById('myNicknameLabel');
        if (label) {
          if (!currentUser) {
            label.innerHTML = `<span style="color:#bbb;font-size:13px;">访客模式（登录后可评论）</span>`;
            const inputArea = document.getElementById('commentInputArea');
            const submitBtn = document.getElementById('commentSubmitBtn');
            if (inputArea) inputArea.style.opacity = '0.5';
            if (submitBtn) submitBtn.disabled = true;
          } else {
            label.textContent = currentUser.is_teacher ? '👩‍🏫 老师（我）' : currentUser.nickname;
          }
        }
        await loadComments();
        subscribeRealtime();
        commentsLoaded = true;
      }
    } else {
      panel.style.display = 'none';
      if (btn) {
        btn.style.borderColor = '#6CAD9C';
        btn.style.background  = 'white';
      }
    }
  }

  // ── 安全转义 ──
  function escHtml(str) {
    return String(str || '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function escAttr(str) {
    return String(str || '').replace(/'/g, '&#39;');
  }

  // ── 挂到全局，供 HTML onclick 调用 ──
  window.__comments = {
    toggleComments,
    submitComment,
    startReply,
    cancelReply,
    toggleLike,
    togglePin,
    deleteComment
  };

})();