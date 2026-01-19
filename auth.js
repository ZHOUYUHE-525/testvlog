// === auth.js (最终修复版：修复语法错误) ===

let authClient = null; // 🟢 必须有这一行，否则会报错！
// 1. 配置 Supabase
const AUTH_SUPABASE_URL = 'https://bwweaohahsafbecogist.supabase.co'; 
const AUTH_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3d2Vhb2hhaHNhZmJlY29naXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NTk3MjMsImV4cCI6MjA4NDMzNTcyM30.ZqViPiwlvzzaqkWLMzejjpgHXeztkD0K0ne32kfGhWw';

// === auth.js 测试站专用加强版 ===

async function initAuth() {
    // 1. 如果工具箱还没加载好，等 100 毫秒再试 (解决加载顺序问题)
    if (typeof window.supabase === 'undefined') {
        setTimeout(initAuth, 100);
        return;
    }

    if (!authClient) {
        authClient = window.supabase.createClient(AUTH_SUPABASE_URL, AUTH_SUPABASE_KEY);
    }
    
    // 2. 工具箱好了，再让保安查房
    checkLogin();
}

// 启动！
initAuth();

// === 功能 A: 记录登录日志 ===
async function logVisit(user) {
    if (sessionStorage.getItem('logged_in_this_session')) return; 
    try {
        const userAgent = navigator.userAgent;
        let deviceName = "未知设备";
        if (userAgent.includes("iPhone")) deviceName = "iPhone";
        else if (userAgent.includes("iPad")) deviceName = "iPad";
        else if (userAgent.includes("Mac")) deviceName = "Mac电脑";
        else if (userAgent.includes("Windows")) deviceName = "Windows电脑";
        else if (userAgent.includes("Android")) deviceName = "Android";

        await authClient.from('login_logs').insert({
            email: user.email,
            device: deviceName + " (" + new Date().toLocaleString() + ")"
        });
        
        sessionStorage.setItem('logged_in_this_session', 'true');
        console.log("📷 登录日志已记录");
    } catch (e) { console.error("日志失败", e); }
}

// === 功能 B: 核心检查 (之前就是这里缺了函数头！) ===
async function checkLogin() {
    if (!authClient) return;

    // 🟢 1. 绿色通道 (刚登录跳转过来的，免检)
    if (window.location.href.includes('from_login=1')) {
        console.log("🛡️ 检测到刚登录，保安放行！");
        const newUrl = window.location.href.replace(/[\?&]from_login=1/, '');
        window.history.replaceState({}, document.title, newUrl);
        return; 
    }

    // 🔵 2. 【核心修改】强制联网核对 (getUser 会直接问云端：这人还在名单上吗？)
    // 这一步能彻底解决“后台删了号，前台还能进”的缓存漏洞
    const { data: { user }, error: authError } = await authClient.auth.getUser();

    // 🔴 3. 如果联网核对失败（账号已删、令牌过期等）
    if (authError || !user) {
        // 如果我们不在登录页，就得执行强踢
        if (!window.location.href.includes('login')) {
            console.warn("🚨 账号已失效或已被注销");
            
            // 暴力清空所有本地缓存，烧掉那张“鬼票”
            localStorage.clear();
            sessionStorage.clear();
            
            alert("您的账号已过期或失效，请联系老师。");
            window.location.replace('login.html');
        }
        return; // 保安拒绝放行
    }

    // 🟢 4. 如果联网核对成功，说明账号还在，我们再拿 Session 走后面的互踢逻辑
    const { data: { session } } = await authClient.auth.getSession();
    
    if (session) {
        // 记录登录日志
        logVisit(session.user);

        // 如果在登录页，送去首页
        if (window.location.href.includes('login')) {
            window.location.href = 'home.html';
        }
    }
}

    // 🔴 3. 互踢检查 (只有在非登录页才检查)
    if (!window.location.href.includes('login')) {
        const myToken = localStorage.getItem('my_session_token');
        
        if (myToken) {
            // 去数据库查最新的条子
            const { data: profile, error } = await authClient
                .from('profiles')
                .select('session_token')
                .eq('id', session.user.id)
                .maybeSingle();

            // 发现条子不一致 -> 踢下线
            if (profile && profile.session_token && profile.session_token !== myToken) {
                console.warn("⚠️ 账号异地登录，强制下线");
                alert("⚠️ 您的账号已在其他设备登录！\n本设备已被强制下线。");
                
                // 先斩后奏：清空本地
                localStorage.removeItem('my_session_token');
                // 清空 Supabase 缓存
                for (let key in localStorage) {
                    if (key.startsWith('sb-')) localStorage.removeItem(key);
                }
                sessionStorage.clear();
                
                // 通知服务器登出 (不等待)
                authClient.auth.signOut();

                // 跳转
                window.location.replace('login.html');
                return; 
            }
        }
    }

    // 4. 正常状态：记录日志
    logVisit(session.user);

    // 5. 如果还在登录页，送去首页
    if (window.location.href.includes('login')) {
        window.location.href = 'home.html';
    }
}

// === 功能 C: 强制退出 ===
window.globalLogout = async function() {
    if(confirm("确定要退出登录吗？")) {
        localStorage.removeItem('my_session_token');
        for (let key in localStorage) {
            if (key.startsWith('sb-')) localStorage.removeItem(key);
        }
        sessionStorage.clear();
        await authClient.auth.signOut();
        window.location.href = 'login.html';
    }
};

// === 立即执行检查 ===
checkLogin();
