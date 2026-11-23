/**
 * De Portal Schools - Authentication & Security Handler
 * Powered by BursarIQ
 */

const AUTH_KEY = "richvine_admin_session";

const DEFAULT_ADMIN_CREDS = [
  { username: "admin", password: "password123", role: "Super Administrator", name: "Principal Administrator" },
  { username: "bursar", password: "bursar123", role: "Chief Bursary Officer", name: "Mrs. A. Adeleke (Chief Bursar)" },
  { username: "records", password: "record123", role: "Records Officer", name: "Mr. D. Okon (Academic Secretary)" }
];

function getActiveAdminCredentials() {
  let list = null;
  // 1. Highest priority: explicit admin credentials stored in localStorage
  try {
    const custom = localStorage.getItem("BURSARIQ_ADMIN_CREDS");
    if (custom) {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed) && parsed.length > 0) list = parsed;
    }
  } catch (_) {}

  // 2. Check main database config
  if (!list) {
    try {
      const dbRaw = localStorage.getItem("richvine_bursar_db_v6");
      if (dbRaw) {
        const db = JSON.parse(dbRaw);
        if (db && db.config && Array.isArray(db.config.adminCredentials) && db.config.adminCredentials.length > 0) {
          list = db.config.adminCredentials;
        }
      }
    } catch (_) {}
  }

  // 3. Check school config cache
  if (!list) {
    try {
      const cfgRaw = localStorage.getItem("BURSARIQ_SCHOOL_CONFIG");
      if (cfgRaw) {
        const cfg = JSON.parse(cfgRaw);
        if (Array.isArray(cfg.adminCredentials) && cfg.adminCredentials.length > 0) {
          list = cfg.adminCredentials;
        }
      }
    } catch (_) {}
  }

  // 4. Check window.BURSARIQ_CONFIG
  if (!list && typeof window !== "undefined" && window.BURSARIQ_CONFIG && Array.isArray(window.BURSARIQ_CONFIG.adminCredentials)) {
    list = window.BURSARIQ_CONFIG.adminCredentials;
  }

  // 5. Default credentials
  if (!list || !Array.isArray(list) || list.length === 0) {
    list = DEFAULT_ADMIN_CREDS;
  }

  // Ensure every account has appropriate role and name metadata
  return list.map(item => {
    const def = DEFAULT_ADMIN_CREDS.find(d => d.username.toLowerCase() === String(item.username || '').toLowerCase());
    return {
      username: String(item.username || '').trim(),
      password: String(item.password || '').trim(),
      role: item.role || (def ? def.role : "Administrator"),
      name: item.name || (def ? def.name : item.username)
    };
  });
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
    if (!uClean || !pClean) {
      return { success: false, message: "Please enter both username and password." };
    }
    const activeCreds = getActiveAdminCredentials();
    const user = activeCreds.find(u => {
      const matchU = u.username.toLowerCase() === uClean;
      // Strictly match the configured password ONLY — no hardcoded fallback bypasses!
      const matchP = u.password === pClean;
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
  window.getActiveAdminCredentials = getActiveAdminCredentials;
  window.DPSAuth = RichVineAuth;
  window.DePortalSchoolsAuth = RichVineAuth;
  window.RichVineAuth = RichVineAuth;
}
