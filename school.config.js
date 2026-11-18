/**
 * ===================================================================
 * BURSARIQ — MASTER INSTITUTIONAL CONFIGURATION FILE
 * "Every naira accounted for."
 * ===================================================================
 * 
 * 💡 TO DEPLOY THIS PLATFORM FOR ANY NEW SCHOOL:
 * Simply change the values in this single file!
 * The entire platform (Landing page, Admin Dashboard, Receipts, Ledgers, 
 * Login portals, CBT assessment, and Printable reports) will automatically 
 * update and brand itself for the new school.
 * ===================================================================
 */

(function () {
  const config = {
    // ── 1. Basic School Identity ──────────────────────────────────────
    schoolName: "EXCELLENCE MODEL COLLEGE",
    schoolShortName: "EXCELLENCE COLLEGE",
    acronym: "EMC",
    motto: "Knowledge, Character & Leadership",
    logoText: "EMC", // Initials displayed on circular badges/crest
    logoUrl: "assets/images/bursariq-logo.png", // Path to school badge or default
    
    // ── 2. Contact & Physical Location ────────────────────────────────
    address: "12 Education Boulevard, Victoria Island / Ikeja, Lagos State, Nigeria",
    phone: "08012345678",
    adminContact: "08012345678",
    contactEmail: "admin@excellencemodel.edu.ng",
    websiteUrl: "https://excellencemodel.edu.ng",
    
    // ── 3. Academic Calendar & Currency ───────────────────────────────
    currentSession: "2026/2027",
    currentTerm: "1st Term",
    currencySymbol: "₦",
    currencyCode: "NGN",
    
    // ── 4. Official Banking Details (Printed on Invoices & Receipts) ──
    bankDetails: {
      bankName: "Zenith Bank Plc",
      accountName: "EXCELLENCE MODEL COLLEGE - BURSARY",
      accountNumber: "1012345678",
      tinNumber: "TIN-9876543210"
    },
    
    // ── 5. System Administrator Credentials ───────────────────────────
    adminCredentials: [
      { username: "admin", password: "password123", role: "Super Administrator", name: "Principal Administrator" },
      { username: "admin", password: "richvine2025", role: "Super Administrator", name: "Principal Administrator" },
      { username: "bursar", password: "bursar123", role: "Chief Bursary Officer", name: "Mrs. A. Adeleke (Chief Bursar)" },
      { username: "records", password: "record123", role: "Records Officer", name: "Mr. D. Okon (Academic Secretary)" }
    ],

    // ── 6. Cloud Database Connection (Google Firebase) ────────────────
    // Paste the school's Firebase web app credentials here when hosting online.
    // If left empty or dummy, BursarIQ operates 100% offline in LocalStorage.
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

  // Expose globally
  window.BURSARIQ_CONFIG = config;

  // Auto-apply branding to DOM once loaded
  if (typeof document !== "undefined") {
    function applyBranding() {
      // 1. Clean and Update Document Title
      if (document.title) {
        document.title = document.title.replace(/<[^>]*>?/gm, '').replace(/RichVine College|RICHVINE COLLEGE/gi, config.schoolName);
        if (!document.title.includes(config.schoolName)) {
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

      // 3. Comprehensive Class-Based Fallback Text Replacement
      document.querySelectorAll('.school-name-text').forEach(el => { el.textContent = config.schoolName; });
      document.querySelectorAll('.school-motto-text').forEach(el => { el.textContent = config.motto; });
      document.querySelectorAll('.school-acronym-text').forEach(el => { el.textContent = config.acronym; });
      document.querySelectorAll('.school-address-text').forEach(el => { el.textContent = config.address; });
      document.querySelectorAll('.school-phone-text').forEach(el => { el.textContent = config.phone; });
      document.querySelectorAll('.school-email-text').forEach(el => { el.textContent = config.contactEmail; });
      document.querySelectorAll('.school-session-text').forEach(el => { el.textContent = config.currentSession; });
      document.querySelectorAll('.school-term-text').forEach(el => { el.textContent = config.currentTerm; });
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
  }
})();
