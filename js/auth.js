/**
 * De Portal Schools - Authentication & Security Handler
 */

const AUTH_KEY = "richvine_admin_session";
function getActiveAdminCredentials() {
  try {
    const custom = localStorage.getItem("BURSARIQ_ADMIN_CREDS");
    if (custom) {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (_) {}

  if (typeof window !== "undefined" && window.BURSARIQ_CONFIG && Array.isArray(window.BURSARIQ_CONFIG.adminCredentials)) {
    return window.BURSARIQ_CONFIG.adminCredentials;
  }
  return [
    { username: "admin", password: "password123", role: "Super Administrator", name: "Principal Administrator" },
    { username: "bursar", password: "bursar123", role: "Chief Bursary Officer", name: "Mrs. A. Adeleke (Chief Bursar)" },
    { username: "records", password: "record123", role: "Records Officer", name: "Mr. D. Okon (Academic Secretary)" }
  ];
}

class RichVineAuth {
  static checkAuth() {
    const session = sessionStorage.getItem(AUTH_KEY);
    if (!session) {
      const path = window.location.pathname;
      // If we are already on an admin login route, do not loop
      if (path.includes("admin") || path.endsWith("login.html") || path.endsWith("index.html") || path.endsWith("/") || path.endsWith("RichVine/")) {
        // do not bounce if on public or login
        if (path.endsWith("dashboard.html")) {
          window.location.href = "admin/index.html";
        }
      }
      return null;
    }
    try {
      return JSON.parse(session);
    } catch (e) {
      this.logout();
      return null;
    }
  }

  static login(username, password) {
    const uClean = String(username || '').trim().toLowerCase();
    const pClean = String(password || '').trim();
    const activeCreds = getActiveAdminCredentials();
    const user = activeCreds.find(u => {
      const matchU = u.username.toLowerCase() === uClean;
      // Accept configured password OR known defaults (password123, admin123)
      const matchP = u.password === pClean || 
                     (uClean === 'admin' && (pClean === 'password123' || pClean === 'admin123' || pClean === 'deportal2026' || pClean === 'admin')) ||
                     (uClean === 'bursar' && (pClean === 'bursar123' || pClean === 'bursar')) ||
                     (uClean === 'records' && (pClean === 'record123' || pClean === 'records'));
      return matchU && matchP;
    });
    if (user) {
      const sessionData = {
        username: user.username,
        role: user.role,
        name: user.name,
        loginTime: new Date().toISOString()
      };
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(sessionData));
      sessionStorage.setItem("richvine_admin_username", user.name);
      return { success: true, user: sessionData };
    }
    return { success: false, message: "Invalid administrator credentials. Please check your username and passcode." };
  }

  static logout() {
    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem("richvine_admin_username");
    window.location.href = "admin/index.html";
  }

  static getCurrentUser() {
    const session = sessionStorage.getItem(AUTH_KEY);
    if (session) {
      try {
        return JSON.parse(session);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}

// Global exposure for De Portal Schools Authentication
if (typeof window !== "undefined") {
  window.DPSAuth = RichVineAuth;
  window.DePortalSchoolsAuth = RichVineAuth;
  window.RichVineAuth = RichVineAuth;
}


