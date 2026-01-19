// === auth.js (CTO 手机防闪死/防循环 稳定版) ===

let authClient = null;
const AUTH_SUPABASE_URL = 'https://bwweaohahsafbecogist.supabase.co'; 
const AUTH_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3d2Vhb2hhaHNhZmJlY29naXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NTk3MjMsImV4cCI6MjA4NDMzNTcyM30.ZqViPiwlvzzaqkWLMzejjpgHXeztkD0K0ne32kfGhWw';

async function initAuth() {
    if (typeof window.supabase === 'undefined') {
        setTimeout(initAuth, 100);
        return;
    }
    if (!authClient) {
        authClient = window.supabase.createClient(AUTH_SUPABASE_URL, AUTH_SUPABASE_KEY);
    }
    checkLogin();
}

initAuth();

async function checkLogin() {
    if (!authClient) return;

    const isLoginPage = window.location.href.includes('login.html');

    // 🟢 1. 登录成功绿色通道
    if (window.location.href.includes('from_login=1')) {
        console.log("🛡️ 登录成功，放行");
        const newUrl = window.location.href.replace(/[\?&]from_login=1/, '');
        window.history.replaceState({}, document.title, newUrl);
        return; 
    }

    // 🔴 2. 核心修正：如果在登录页，且没有成功登录信号，【禁止】保安自动跳转
    // 这样就切断了无限刷新的循环
    if (isLoginPage) {
        console.log("📍 当前在登录页，保安保持静默，等待用户操作");
        return; 
    }

    // 🔵 3. 获取用户状态（仅在非登录页才执行联网检查）
    const { data: { user } } = await authClient.auth.getUser();

    // 3.1 没登录：踢去登录页
    if (!user) {
        console.log("🚫 未登录，跳转入口");
        window.location.replace('login.html');
        return;
    }

    // 3.2 已登录：核对互踢存根和账号有效性
    const { data: profile } = await authClient
        .from('profiles')
        .select('session_token')
        .eq('id', user.id)
        .maybeSingle();

    if (!profile) {
        console.warn("🚨 账号失效");
        localStorage.clear();
        sessionStorage.clear();
        alert("账号已注销或失效。");
        window.location.replace('login.html');
        return;
    }

    const myLocalToken = localStorage.getItem('my_session_token');
    if (myLocalToken && profile.session_token && profile.session_token !== myLocalToken) {
        console.warn("🚨 异地登录");
        localStorage.clear();
        sessionStorage.clear();
        alert("⚠️ 您的账号已在其他设备登录，本设备已自动下线。");
        window.location.replace('login.html');
        return;
    }

    // 4. 放行并记录日志
    logVisit(user);
}

async function logVisit(user) {
    if (sessionStorage.getItem('logged_in_this_session')) return; 
    try {
        await authClient.from('login_logs').insert({
            email: user.email,
            device: navigator.userAgent.substring(0, 50)
        });
        sessionStorage.setItem('logged_in_this_session', 'true');
    } catch (e) {}
}

window.globalLogout = async function() {
    if(!confirm("确定要退出登录吗？")) return;
    // 退出前把所有本地存根清空
    localStorage.clear();
    sessionStorage.clear();
    if (authClient) await authClient.auth.signOut();
    window.location.replace('login.html');
};
