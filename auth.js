// === auth.js (最终修复版：修复语法错误) ===

// 1. 配置 Supabase
const AUTH_SUPABASE_URL = 'https://tcrayyqmozfqrfagvusp.supabase.co'; 
const AUTH_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcmF5eXFtb3pmcXJmYWd2dXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNTY0NjYsImV4cCI6MjA4MTgzMjQ2Nn0.G4ei36j_DgvIRaa3wzO89YI8lj67MQs9ZbrsDFzxi1M';

// 2. 初始化
let authClient = null;
if (typeof window.supabase !== 'undefined') {
    authClient = window.supabase.createClient(AUTH_SUPABASE_URL, AUTH_SUPABASE_KEY);
} else {
    console.error("❌ 错误：Supabase 库未加载，auth.js 无法工作！");
}

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
        // 悄悄去掉网址尾巴，不刷新页面
        const newUrl = window.location.href.replace(/[\?&]from_login=1/, '');
        window.history.replaceState({}, document.title, newUrl);
        return; // 直接结束，不查了
    }

    // 🔵 2. 检查是否登录 (基本门票)
    const { data: { session } } = await authClient.auth.getSession();

    // 如果没登录
    if (!session) {
        // 如果当前不在登录页，踢去登录页
        // (这里用 includes('login') 是为了兼容 login.html 和 无后缀的 login)
        if (!window.location.href.includes('login')) {
            console.log("🚫 未登录，跳转登录页");
            window.location.href = 'login.html';
        }
        return;
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
