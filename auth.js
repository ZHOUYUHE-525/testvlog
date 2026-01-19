// === auth.js (CTO 终极整合版：修复互踢与闪退) ===

let authClient = null;

const AUTH_SUPABASE_URL = 'https://bwweaohahsafbecogist.supabase.co'; 
const AUTH_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3d2Vhb2hhaHNhZmJlY29naXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NTk3MjMsImV4cCI6MjA4NDMzNTcyM30.ZqViPiwlvzzaqkWLMzejjpgHXeztkD0K0ne32kfGhWw';

// 初始化函数
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

// 启动
initAuth();

// === 核心检查逻辑 ===
async function checkLogin() {
    if (!authClient) return;

    const isLoginPage = window.location.href.includes('login.html');

    // 1. 绿色通道
    if (window.location.href.includes('from_login=1')) {
        const newUrl = window.location.href.replace(/[\?&]from_login=1/, '');
        window.history.replaceState({}, document.title, newUrl);
        return; 
    }

    // 2. 获取当前用户 ( getUser 比 getSession 更安全)
    const { data: { user } } = await authClient.auth.getUser();

    // --- 情况 A：没登录 ---
    if (!user) {
        if (!isLoginPage) {
            window.location.replace('login.html');
        }
        return;
    }

    // --- 情况 B：已登录，进行互踢和删号核对 ---
    const { data: profile, error } = await authClient
        .from('profiles')
        .select('session_token')
        .eq('id', user.id)
        .maybeSingle();

    // 2.1 账号被删检查
    if (!profile) {
        localStorage.clear();
        if (!isLoginPage) {
            alert("账号已失效。");
            window.location.replace('login.html');
        }
        return;
    }

    // 2.2 🔴 互踢核心逻辑
    const myLocalToken = localStorage.getItem('my_session_token');
    if (myLocalToken && profile.session_token && profile.session_token !== myLocalToken) {
        console.warn("🚨 检测到异地登录");
        localStorage.clear();
        sessionStorage.clear();
        alert("⚠️ 您的账号已在其他设备登录，本设备已下线。");
        window.location.replace('login.html');
        return;
    }

    // 3. 记录日志并处理跳转
    logVisit(user);
    if (isLoginPage) {
        window.location.replace('home.html');
    }
}

// === 日志记录 ===
async function logVisit(user) {
    if (sessionStorage.getItem('logged_in_this_session')) return; 
    try {
        await authClient.from('login_logs').insert({
            email: user.email,
            device: navigator.userAgent.substring(0, 100)
        });
        sessionStorage.setItem('logged_in_this_session', 'true');
    } catch (e) {}
}

// === 退出登录 ===
window.globalLogout = async function() {
    if(confirm("确定要退出登录吗？")) {
        localStorage.clear();
        sessionStorage.clear();
        if (authClient) await authClient.auth.signOut();
        window.location.replace('login.html');
    }
};
