// === auth.js (CTO 温和更新/防闪退 稳定版) ===

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

    const path = window.location.pathname;
    const isLoginPage = path.includes('login') || path === '/' || path === '';

    if (isLoginPage) {
        console.log("📍 登录页静默模式");
        return; 
    }

    checkLogin();
}

initAuth();

async function checkLogin() {
    if (!authClient) return;

    // 1. 登录成功绿色通道
    if (window.location.href.includes('from_login=1')) {
        const newUrl = window.location.href.replace(/[\?&]from_login=1/, '');
        window.history.replaceState({}, document.title, newUrl);
        return; 
    }

    // 2. 尝试获取用户
    const { data: { user } } = await authClient.auth.getUser();

    // --- 🟢 优化点：没拿到用户只回登录页，【不清空】本地缓存 ---
    if (!user) {
        console.log("🚫 无登录信息，返回入口");
        window.location.replace('login.html');
        return;
    }

    // 3. 只有确认人在登录状态，才去查权限表
    const { data: profile } = await authClient
        .from('profiles')
        .select('session_token, expire_at')
        .eq('id', user.id)
        .maybeSingle();

    // 4. 🔴 只有在数据库里【查不到人】时，才判定为“账号被删”，执行彻底清空
    if (!profile) {
        console.error("🚨 账号已被注销");
        localStorage.clear();
        sessionStorage.clear();
        alert("您的账号已失效。");
        window.location.replace('login.html');
        return;
    }

    // 5. 检查到期（到期才清空）
    if (profile.expire_at) {
        const now = new Date();
        const expireDate = new Date(profile.expire_at);
        if (now > expireDate) {
            console.warn("🚨 试用期已过");
            localStorage.clear();
            sessionStorage.clear();
            alert("您的账号试用期已满，请联系老师。");
            window.location.replace('login.html');
            return;
        }
    }

    // 6. 互踢检查（互踢才清空）
    const myLocalToken = localStorage.getItem('my_session_token');
    if (myLocalToken && profile.session_token && profile.session_token !== myLocalToken) {
        localStorage.clear();
        sessionStorage.clear();
        alert("⚠️ 您的账号已在其他设备登录，本设备已下线。");
        window.location.replace('login.html');
        return;
    }

    // 7. 正常放行：记录日志
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
