// === auth.js (CTO 佛系稳定版 - 拒绝更新闪退) ===

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

    // 🟢 核心改动：使用 getSession。它只读本地缓存，速度极快且不联网。
    // 只要缓存里的 Token 没过期（默认1小时），它就永远不会报错，也不会踢人。
    const { data: { session } } = await authClient.auth.getSession();

    if (!session) {
        console.log("📍 无票，去登录页");
        window.location.replace('login.html');
        return;
    }

    // 已经在页面里了，我们【不再】阻塞性地去联网核对。
    // 只有当你刷新页面或者跳转时，它才会在后台静默地、温柔地看一眼。
    lazyCheck(session.user);
}

initAuth();

// 温柔的后台检查
async function lazyCheck(user) {
    try {
        // 后台查一下 profile，只是为了互踢和到期检查
        const { data: profile } = await authClient
            .from('profiles')
            .select('session_token, expire_at')
            .eq('id', user.id)
            .maybeSingle();

        if (!profile) return; // 如果网络卡了没查到，我们当没看见，不踢人

        // 只有明确发现到期了，才踢人
        if (profile.expire_at && new Date() > new Date(profile.expire_at)) {
            localStorage.clear();
            window.location.replace('login.html');
            return;
        }

        // 互踢逻辑：依然保留，但如果联网失败，也不会误伤
        const myLocalToken = localStorage.getItem('my_session_token');
        if (myLocalToken && profile.session_token && profile.session_token !== myLocalToken) {
            localStorage.clear();
            alert("账号在别处登录 / Logged in elsewhere");
            window.location.replace('login.html');
        }

    } catch (e) {
        // 关键：联网核对失败时（比如你正在更新后台），保持沉默，让学生继续学
        console.warn("静默核对暂不可用，保持当前登录");
    }
}

window.globalLogout = async function() {
    if(!confirm("确定要退出登录吗？")) return;
    localStorage.clear();
    sessionStorage.clear();
    if (authClient) await authClient.auth.signOut();
    window.location.replace('login.html');
};
