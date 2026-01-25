// === auth.js (CTO 彻底停火/零循环 终极稳定版) ===

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

    // 🔴 第一步：立即判断是否在登录页（支持多种路径格式）
    const path = window.location.pathname;
    const isLoginPage = path.includes('login') || path === '/' || path === '';

    // 🔴 第二步：如果在登录页，保安直接“下班”，不准执行任何跳转逻辑！
    if (isLoginPage) {
        console.log("📍 已进入登录阵地，保安停止干预，防止循环。");
        return; 
    }

    // 第三步：如果不在登录页，再检查登录状态
    checkLogin();
}

initAuth();

async function checkLogin() {
    if (!authClient) return;

    // 1. 登录成功的绿色通道
    if (window.location.href.includes('from_login=1')) {
        const newUrl = window.location.href.replace(/[\?&]from_login=1/, '');
        window.history.replaceState({}, document.title, newUrl);
        return; 
    }

    // 2. 获取用户
    const { data: { user }, error } = await authClient.auth.getUser();

    // 3. 没登录，送去登录
    if (!user || error) {
        console.log("🚫 无票，踢回登录");
        window.location.replace('login.html');
        return;
    }

    const { data: profile } = await authClient
        .from('profiles')
        .select('session_token, expire_at') // 增加了 expire_at
        .eq('id', user.id)
        .maybeSingle();

    // 1. 检查账号是否被删
    if (!profile) {
        localStorage.clear();
        if (!isLoginPage) {
            alert("账号已失效。");
            window.location.replace('login.html');
        }
        return;
    }

    // 2. 🟢 新增：检查是否到期
    if (profile.expire_at) {
        const now = new Date(); // 获取当前时间
        const expireDate = new Date(profile.expire_at); // 获取数据库存的到期时间
        
        if (now > expireDate) {
            console.warn("🚨 试用期已过");
            localStorage.clear();
            sessionStorage.clear();
            alert("您的账号试用期已满，请联系老师。");
            window.location.replace('login.html');
            return;
        }
    }


    const myLocalToken = localStorage.getItem('my_session_token');
    if (myLocalToken && profile.session_token && profile.session_token !== myLocalToken) {
        localStorage.clear();
        sessionStorage.clear();
        alert("⚠️ 您的账号已在其他设备登录，本设备已下线。");
        window.location.replace('login.html');
        return;
    }

    // 5. 正常放行：记录日志
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
    localStorage.clear();
    sessionStorage.clear();
    if (authClient) await authClient.auth.signOut();
    window.location.replace('login.html');
};
