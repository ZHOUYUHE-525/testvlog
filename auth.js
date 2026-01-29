// === auth.js (CTO 终极静默核对版 - 解决更新闪退) ===

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

    if (isLoginPage) return; 

    // 🔴 核心改进：先执行快速本地检查，不等待网络请求，防止发布时的网络波动导致闪退
    const { data: { session } } = await authClient.auth.getSession();

    if (!session) {
        console.log("📍 本地无通行证，去登录页");
        window.location.replace('login.html');
        return;
    }

    // 🟢 已经在页面内了，悄悄在后台核对身份，不阻塞学生看视频
    checkLiveStatus(session.user);
}

initAuth();

async function checkLiveStatus(user) {
    try {
        // 1. 联网核对 profile 行（这是最准的，删号即刻生效）
        const { data: profile, error } = await authClient
            .from('profiles')
            .select('session_token, expire_at')
            .eq('id', user.id)
            .maybeSingle();

        // 2. 只有明确查不到人（被删了），或者报错了，才踢人
        if (!profile || error) {
            console.error("🚨 身份核对失败，可能账号已注销");
            localStorage.clear();
            sessionStorage.clear();
            window.location.replace('login.html');
            return;
        }

        // 3. 检查到期
        if (profile.expire_at && new Date() > new Date(profile.expire_at)) {
            localStorage.clear();
            alert("试用期已满 / Trial Expired");
            window.location.replace('login.html');
            return;
        }

        // 4. 互踢检查
        const myLocalToken = localStorage.getItem('my_session_token');
        if (myLocalToken && profile.session_token && profile.session_token !== myLocalToken) {
            localStorage.clear();
            alert("账号在别处登录 / Logged in elsewhere");
            window.location.replace('login.html');
            return;
        }

        // 如果一切正常，记录登录日志
        logVisit(user);

    } catch (e) {
        // 如果是网络卡顿导致报错，我们选择【原谅】，不踢学生，让他们继续看
        console.warn("🌐 网络波动，暂时跳过身份核对");
    }
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
