/**
 * ===================================================================
 * DE PORTAL SCHOOLS — MASTER INSTITUTIONAL CONFIGURATION FILE
 * Powered by BursarIQ — "Every naira accounted for."
 * ===================================================================
 * 
 * 💡 EDITABLE VIA ADMIN PORTAL SETTINGS:
 * The settings configured here or in the Admin Portal "System Settings"
 * tab will automatically brand and configure the entire platform:
 * Landing page, Admin Dashboard, Receipts, Broadsheets, Login portals,
 * CBT assessment, Teacher Portal, and Printable reports.
 * ===================================================================
 */

(function () {
  // Check for admin-saved configuration overrides in localStorage first
  let savedConfig = {};
  try {
    const raw = localStorage.getItem("BURSARIQ_SCHOOL_CONFIG");
    if (raw) savedConfig = JSON.parse(raw);
  } catch (e) {
    console.warn("Could not parse saved school config from localStorage:", e);
  }

  const defaultConfig = {
    // ── 1. Basic School Identity ──────────────────────────────────────
    schoolName: "DE PORTAL SCHOOLS",
    schoolShortName: "DE PORTAL",
    acronym: "DPS",
    motto: "Gateway to Academic Excellence & Moral Integrity",
    logoText: "DPS", // Initials displayed on circular badges/crest
    logoUrl: "assets/images/bursariq-logo.png", // Path to school badge or default
    
    // ── 2. Contact & Physical Location ────────────────────────────────
    address: "5-7 Olukayode Street, Imoro, Ogijo, Ogun State, Nigeria",
    phone: "08012345678",
    adminContact: "08012345678",
    contactEmail: "admin@deportalschools.edu.ng",
    websiteUrl: "https://deportalschools.edu.ng",
    
    // ── 3. Academic Calendar & Currency ───────────────────────────────
    currentSession: "2026/2027",
    currentTerm: "1st Term",
    currencySymbol: "₦",
    currencyCode: "NGN",
    
    // ── 4. Official Banking Details (Printed on Invoices & Receipts) ──
    bankDetails: {
      bankName: "Zenith Bank Plc",
      accountName: "DE PORTAL SCHOOLS - BURSARY",
      accountNumber: "1012345678",
      tinNumber: "TIN-9876543210"
    },
    
    // ── 5. System Administrator Credentials ───────────────────────────
        adminCredentials: [
      { username: "admin", password: "password123", role: "Super Administrator", name: "Principal Administrator" },
      { username: "admin", password: "admin123", role: "Super Administrator", name: "Principal Administrator" },
      { username: "admin", password: "deportal2026", role: "Super Administrator", name: "Principal Administrator" },
      { username: "bursar", password: "bursar123", role: "Chief Bursary Officer", name: "Mrs. A. Adeleke (Chief Bursar)" },
      { username: "records", password: "record123", role: "Records Officer", name: "Mr. D. Okon (Academic Secretary)" }
    ],

    // ── 6. Cloud Database Connection (Google Firebase) ────────────────
    firebaseConfig: {
      apiKey: "AIzaSyDPR_ELiTuxM8jObdJeWSIzfqotWJXnf-c",
      authDomain: "bursariq.firebaseapp.com",
      projectId: "bursariq",
      storageBucket: "bursariq.firebasestorage.app",
      messagingSenderId: "882141938065",
      appId: "1:882141938065:web:e7725268061ce571f45a30",
      measurementId: "G-BQ7M82MBK7"
    }
  };

  // Merge default config with any admin-saved overrides
  // Sanitize legacy cache
  if (savedConfig.schoolName && /richvine/i.test(savedConfig.schoolName)) {
    savedConfig.schoolName = "DE PORTAL SCHOOLS";
    savedConfig.schoolShortName = "DE PORTAL";
    savedConfig.acronym = "DPS";
  }
  if (savedConfig.address && /lagos/i.test(savedConfig.address)) {
    savedConfig.address = "5-7 Olukayode Street, Imoro, Ogijo, Ogun State, Nigeria";
  }
  const config = Object.assign({}, defaultConfig, savedConfig);
  if (savedConfig.bankDetails) {
    config.bankDetails = Object.assign({}, defaultConfig.bankDetails, savedConfig.bankDetails);
  }
  if (savedConfig.firebaseConfig) {
    config.firebaseConfig = Object.assign({}, defaultConfig.firebaseConfig, savedConfig.firebaseConfig);
  }

  // Expose globally
  window.BURSARIQ_CONFIG = config;

  // Auto-apply branding to DOM once loaded
  if (typeof document !== "undefined") {
    function applyBranding() {
      // 1. Clean and Update Document Title
      if (document.title) {
        document.title = document.title
          .replace(/<[^>]*>?/gm, '')
          .replace(/RichVine College|RICHVINE COLLEGE|EXCELLENCE MODEL COLLEGE|Excellence Model College/gi, config.schoolName);
        if (!document.title.includes(config.schoolName) && !document.title.includes(config.schoolShortName)) {
          document.title = config.schoolName + " - " + document.title;
        }
      }

      // 2. Update all elements marked with data-bursar-field
      document.querySelectorAll('[data-bursar-field]').forEach(el => {
        const field = el.getAttribute('data-bursar-field');
        if (field && config[field] !== undefined) {
          el.textContent = config[field];
        }
      });

      // 3. Comprehensive Class-Based Text Replacement
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
      document.querySelectorAll('.school-bank-text').forEach(el => {
        if (config.bankDetails) {
          el.textContent = config.bankDetails.bankName + " | " + config.bankDetails.accountNumber + " (" + config.bankDetails.accountName + ")";
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyBranding);
    } else {
      applyBranding();
    }

    // Listen for live config updates from the Settings panel
    window.addEventListener('bursariq:configUpdated', function(e) {
      if (e.detail) {
        Object.assign(config, e.detail);
        applyBranding();
      }
    });
  }
})();

