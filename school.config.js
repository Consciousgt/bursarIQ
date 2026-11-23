/**
 * ===================================================================
 * DE PORTAL SCHOOLS — MASTER INSTITUTIONAL CONFIGURATION FILE
 * Powered by BursarIQ — "Every naira accounted for."
 * ===================================================================
 * 
 * 💡 LIVE SETTINGS SYNCHRONIZATION:
 * Any edit made in the Admin Portal "Settings" tab is saved to
 * localStorage ("BURSARIQ_SCHOOL_CONFIG" and "richvine_bursar_db_v6.config")
 * and instantly propagates across all pages: Landing page (index.html),
 * Admin Dashboard, Teacher Portal, Student CBT, Login portals, and
 * printable reports/receipts.
 * ===================================================================
 */

(function () {
  function getStoredConfig() {
    let saved = {};
    try {
      const raw = localStorage.getItem("BURSARIQ_SCHOOL_CONFIG");
      if (raw) saved = JSON.parse(raw);
    } catch (e) {}

    try {
      const dbRaw = localStorage.getItem("richvine_bursar_db_v6");
      if (dbRaw) {
        const db = JSON.parse(dbRaw);
        if (db && db.config) {
          saved = Object.assign({}, db.config, saved);
        }
      }
    } catch (e) {}

    return saved;
  }

  const defaultConfig = {
    // ── 1. Basic School Identity ──────────────────────────────────────
    schoolName: "DE PORTAL SCHOOLS",
    schoolShortName: "DE PORTAL",
    acronym: "DPS",
    motto: "Gateway to Academic Excellence & Moral Integrity",
    logoText: "DPS",
    logoUrl: "assets/images/bursariq-logo.png",
    
    // ── 2. Contact & Physical Location ────────────────────────────────
    address: "5-7 Olukayode Street, Imoro, Ogijo, Ogun State, Nigeria",
    phone: "09053126809",
    adminContact: "09053126809",
    contactEmail: "deportalschools@gmail.com",
    websiteUrl: "https://deportalschools.edu.ng",
    
    // ── 3. Academic Calendar & Currency ───────────────────────────────
    currentSession: "2026/2027",
    currentTerm: "1st Term",
    currencySymbol: "₦",
    currencyCode: "NGN",
    
    // ── 4. Official Banking Details ───────────────────────────────────
    bankDetails: {
      bankName: "Zenith Bank Plc",
      accountName: "DE PORTAL SCHOOLS - BURSARY",
      accountNumber: "1012345678",
      tinNumber: "TIN-9876543210"
    },
    
    // ── 5. Cloud Database Connection (Google Firebase) ────────────────
    firebaseConfig: {
      apiKey: "AIzaSyDPR_ELiTuxM8jObdJeWSIzfqotWJXnf-c",
      authDomain: "bursariq.firebaseapp.com",
      projectId: "bursariq",
      storageBucket: "bursariq.firebasestorage.app",
      messagingSenderId: "882141938065",
      appId: "1:882141938065:web:e7725268061ce571f45a30",
      measurementId: "G-BQ7M82MBK7"
    },

    // ── 6. Default Administrative Accounts ────────────────────────────
    adminCredentials: [
      { username: "admin", password: "password123", role: "Super Administrator", name: "Principal Administrator" },
      { username: "bursar", password: "bursar123", role: "Chief Bursary Officer", name: "Mrs. A. Adeleke (Chief Bursar)" },
      { username: "records", password: "record123", role: "Records Officer", name: "Mr. D. Okon (Academic Secretary)" }
    ]
  };

  function buildMergedConfig() {
    const saved = getStoredConfig();
    const merged = Object.assign({}, defaultConfig, saved);
    if (saved.bankDetails) {
      merged.bankDetails = Object.assign({}, defaultConfig.bankDetails, saved.bankDetails);
    }
    if (saved.firebaseConfig) {
      merged.firebaseConfig = Object.assign({}, defaultConfig.firebaseConfig, saved.firebaseConfig);
    }
    if (saved.adminCredentials && Array.isArray(saved.adminCredentials) && saved.adminCredentials.length > 0) {
      merged.adminCredentials = saved.adminCredentials;
    }
    return merged;
  }

  let config = buildMergedConfig();
  window.BURSARIQ_CONFIG = config;

  // ── Universal DOM Branding Engine ─────────────────────────────────
  function applyBranding() {
    config = buildMergedConfig();
    window.BURSARIQ_CONFIG = config;

    if (typeof document === "undefined") return;

    // 1. Dynamic Page Title
    if (document.title) {
      const baseTitle = document.title.split(" — ")[1] || document.title.split(" - ")[1] || document.title;
      document.title = `${config.schoolName} — ${baseTitle.trim()}`;
    }

    // 2. Class-Based Replacements
    document.querySelectorAll('.school-name-text').forEach(el => { el.textContent = config.schoolName; });
    document.querySelectorAll('.school-short-name-text').forEach(el => { el.textContent = config.schoolShortName; });
    document.querySelectorAll('.school-motto-text').forEach(el => { el.textContent = config.motto; });
    document.querySelectorAll('.school-acronym-text').forEach(el => { el.textContent = config.acronym; });
    document.querySelectorAll('.school-address-text').forEach(el => { el.textContent = config.address; });
    document.querySelectorAll('.school-phone-text').forEach(el => { el.textContent = config.phone; });
    document.querySelectorAll('.school-email-text').forEach(el => { el.textContent = config.contactEmail; });
    document.querySelectorAll('.school-session-text').forEach(el => { el.textContent = config.currentSession; });
    document.querySelectorAll('.school-term-text').forEach(el => { el.textContent = config.currentTerm; });
    document.querySelectorAll('.school-currency-text').forEach(el => { el.textContent = config.currencySymbol; });

    // 3. Data Attribute Replacements
    document.querySelectorAll('[data-bursar-field]').forEach(el => {
      const field = el.getAttribute('data-bursar-field');
      if (field && config[field] !== undefined) {
        el.textContent = config[field];
      }
    });

    // 4. Update Phone Links & Texts
    if (config.phone) {
      const cleanPhone = config.phone.replace(/[^0-9+]/g, '');
      document.querySelectorAll('a[href^="tel:"]').forEach(a => {
        a.setAttribute('href', `tel:${cleanPhone}`);
        const span = a.querySelector('span');
        if (span && !span.classList.contains('no-auto-phone')) {
          span.textContent = config.phone;
        }
      });
    }

    // 5. Update Email Links & Texts
    if (config.contactEmail) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
        a.setAttribute('href', `mailto:${config.contactEmail}`);
        const span = a.querySelector('span');
        if (span && !span.classList.contains('no-auto-email')) {
          span.textContent = config.contactEmail;
        }
      });
    }

    // 6. Update Bank Details Elements
    document.querySelectorAll('.school-bank-text').forEach(el => {
      if (config.bankDetails) {
        el.textContent = `${config.bankDetails.bankName} | ${config.bankDetails.accountNumber} (${config.bankDetails.accountName})`;
      }
    });
  }

  // Run on DOM ready
  if (typeof document !== "undefined") {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyBranding);
    } else {
      applyBranding();
    }

    // Re-apply whenever images or components finish rendering
    window.addEventListener('load', applyBranding);

    // Listen for custom in-page event when settings form is submitted
    window.addEventListener('bursariq:configUpdated', function(e) {
      applyBranding();
    });

    // Cross-tab live sync: when Admin updates settings in one tab, all other tabs update instantly!
    window.addEventListener('storage', function(e) {
      if (e.key === 'BURSARIQ_SCHOOL_CONFIG' || e.key === 'richvine_bursar_db_v6') {
        applyBranding();
      }
    });
  }

  // Export helper
  window.BURSARIQ_APPLY_BRANDING = applyBranding;
})();
