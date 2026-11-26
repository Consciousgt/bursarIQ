/**
 * De Portal Schools — Firebase Config v6
 * Real-Time Cloud Synchronization, Multi-Tab Persistent Cache & Spark Free-Tier Quota Shield
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import {
  initializeFirestore,
  getFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  doc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  onSnapshot,
  writeBatch
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPR_ELiTuxM8jObdJeWSIzfqotWJXnf-c",
  authDomain: "bursariq.firebaseapp.com",
  projectId: "bursariq",
  storageBucket: "bursariq.firebasestorage.app",
  messagingSenderId: "882141938065",
  appId: "1:882141938065:web:e7725268061ce571f45a30",
  measurementId: "G-BQ7M82MBK7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ── Multi-Tab Persistent IndexedDB Cache (Quota Shield) ───────────────────────
// Firestore caches documents in IndexedDB across tabs and page reloads.
// Unchanged documents are served from local cache with ZERO server reads!
let db;
try {
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  });
  console.log("[DePortal Firebase] Persistent multi-tab IndexedDB cache active ✓ (Quota Shield Active)");
} catch (e) {
  console.warn("[DePortal Firebase] Local cache init note, falling back to standard getFirestore:", e.message);
  db = getFirestore(app);
}

// ─── Window Bridge ─────────────────────────────────────────────────────────
window.RichVineFirebase = {
  ready: false,
  _syncing: false,
  _realtimeActive: false,
  _refreshTimer: null,

  _scheduleRefresh(cb) {
    if (this._refreshTimer) clearTimeout(this._refreshTimer);
    this._refreshTimer = setTimeout(() => {
      this._refreshTimer = null;
      if (typeof cb === "function") cb();
    }, 250);
  },

  _sanitize(obj) {
    if (!obj || typeof obj !== "object") return obj;
    const clean = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined || v === null) {
        continue;
      } else if (Array.isArray(v)) {
        clean[k] = v.map(item => (item && typeof item === "object") ? this._sanitize(item) : (item === undefined || item === null ? "" : item));
      } else if (typeof v === "object" && !(v instanceof Date)) {
        clean[k] = this._sanitize(v);
      } else {
        clean[k] = v;
      }
    }
    return clean;
  },

  _setSyncStatus(status, text) {
    const badge = document.getElementById("cloud-sync-badge");
    const textEl = document.getElementById("cloud-sync-text");
    const iconEl = badge ? badge.querySelector("i") : null;
    if (!badge || !textEl) return;
    if (status === "synced") {
      badge.style.background = "#f0fdf4";
      badge.style.borderColor = "#bbf7d0";
      badge.style.color = "#166534";
      if (iconEl) iconEl.className = "fas fa-cloud text-emerald-500";
      textEl.textContent = text || "Cloud Synced";
    } else if (status === "syncing") {
      badge.style.background = "#eff6ff";
      badge.style.borderColor = "#bfdbfe";
      badge.style.color = "#1e40af";
      if (iconEl) iconEl.className = "fas fa-sync fa-spin text-sky-500";
      textEl.textContent = text || "Syncing...";
    } else if (status === "offline") {
      badge.style.background = "#fffbeb";
      badge.style.borderColor = "#fde68a";
      badge.style.color = "#92400e";
      if (iconEl) iconEl.className = "fas fa-cloud-rain text-amber-500";
      textEl.textContent = text || "Offline";
    } else {
      badge.style.background = "#fef2f2";
      badge.style.borderColor = "#fecaca";
      badge.style.color = "#991b1b";
      if (iconEl) iconEl.className = "fas fa-exclamation-triangle text-red-500";
      textEl.textContent = text || "Sync Alert";
    }
  },

  // ── Permanent Cloud Tombstone Logger ─────────────────────────────────────
  async recordCloudDeletion(col, id) {
    if (!col || !id) return;
    const tombstoneId = `${col}_${id}`;
    const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
    if (!localDb._tombstones) localDb._tombstones = {};
    localDb._tombstones[id] = Date.now();
    localDb._tombstones[tombstoneId] = Date.now();
    try {
      await setDoc(doc(db, "deletedRecords", tombstoneId), {
        id: tombstoneId,
        col: col,
        targetId: id,
        deletedAt: Date.now()
      }, { merge: true });
      console.log(`[Firebase] Permanent tombstone logged: deletedRecords/${tombstoneId}`);
    } catch (e) {
      console.warn(`[Firebase] Tombstone write note (${col}/${id}):`, e.message);
    }
  },

  // ── Flush Pending Offline Writes (Zero-Read Spark Quota Protection) ───────
  async _flushPendingOfflineChanges() {
    const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
    let changed = false;

    // 1. Process pending offline deletes
    if (Array.isArray(localDb._pendingDeletes) && localDb._pendingDeletes.length > 0) {
      const remaining = [];
      for (const item of localDb._pendingDeletes) {
        try {
          if (item && item.col && item.id) {
            await deleteDoc(doc(db, item.col, item.id));
            await this.recordCloudDeletion(item.col, item.id);
            if (!localDb._tombstones) localDb._tombstones = {};
            localDb._tombstones[item.id] = Date.now();
            changed = true;
          }
        } catch (e) {
          console.warn(`[Firebase] Pending delete note for ${item.col}/${item.id}:`, e.message);
          remaining.push(item);
        }
      }
      localDb._pendingDeletes = remaining;
    }

    // 2. Process pending offline uploads across all collections
    const collections = ["students", "payments", "expenses", "stocks", "stockSales", "stockRestocks", "cbtSubmissions", "cbtAssessments", "staff", "salaries", "staffLoans", "clearance", "teachers", "attendance", "examRecords", "weeklyPerformance"];
    for (const colName of collections) {
      const list = Array.isArray(localDb[colName]) ? localDb[colName] : [];
      for (const item of list) {
        if (item && item._pendingUpload === true) {
          try {
            const clean = this._sanitize(item);
            delete clean._pendingUpload;
            await setDoc(doc(db, colName, item.id), clean, { merge: true });
            delete item._pendingUpload;
            changed = true;
            console.log(`[DePortal Firebase] Flushed offline item to Cloud: ${colName}/${item.id}`);
          } catch (err) {
            console.warn(`[DePortal Firebase] Pending upload failed for ${colName}/${item.id}:`, err.message);
          }
        }
      }
    }

    if (changed && window.RichVineDB) {
      window.RichVineDB.save(localDb);
    }
  },

  // ── Two-Way Cloud Synchronization with Free-Tier Protection ───────────────
  async syncWithCloud(force = false) {
    if (this._syncing) return;
    const now = Date.now();
    const lastSync = Number(localStorage.getItem("dps_last_cloud_sync") || 0);

    // Free Spark Plan Quota Shield:
    // When real-time listeners are active, full collection scans via getDocs are completely disabled
    // unless explicitly forced by the admin (e.g. clicking the manual audit/sync button).
    if (!force && this._realtimeActive) {
      this._syncing = true;
      try {
        await this._flushPendingOfflineChanges();
        this._setSyncStatus("synced", "Cloud Synced");
      } catch (err) {
        console.warn("[DePortal Firebase] Offline flush note:", err.message);
      } finally {
        this._syncing = false;
      }
      return;
    }

    // Rate-limit forced manual full scans to at most once every 30 seconds
    if (force && lastSync && (now - lastSync < 30 * 1000)) {
      console.log("[DePortal Firebase] Quota shield: Manual sync throttled (< 30s since last scan).");
      return;
    }

    // Rate-limit unforced full scans when realtime is not yet active to 15 minutes
    if (!force && lastSync && (now - lastSync < 15 * 60 * 1000)) {
      console.log("[DePortal Firebase] Quota shield active: Full scan throttled. Local cache active.");
      return;
    }

    this._syncing = true;
    this._setSyncStatus("syncing", "Syncing Cloud...");

    try {
      const collections = ["students", "payments", "expenses", "stocks", "stockSales", "stockRestocks", "cbtSubmissions", "cbtAssessments", "staff", "salaries", "staffLoans", "clearance", "teachers", "attendance", "examRecords", "weeklyPerformance"];
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      let changed = false;

      if (!localDb._tombstones) localDb._tombstones = {};

      // 1. Process explicit user-initiated pending deletes (from offline actions)
      await this._flushPendingOfflineChanges();

      // 2. Fetch all Tombstones from Cloud (ensures deletions on other devices are respected)
      const tombstoneSet = new Set(Object.keys(localDb._tombstones || {}));
      try {
        const delSnap = await getDocs(collection(db, "deletedRecords"));
        if (!delSnap.empty) {
          for (const docSnap of delSnap.docs) {
            const d = docSnap.data();
            if (d && d.targetId) {
              tombstoneSet.add(d.targetId);
              tombstoneSet.add(`${d.col || ''}_${d.targetId}`);
              localDb._tombstones[d.targetId] = d.deletedAt || Date.now();
            }
            tombstoneSet.add(docSnap.id);
          }
        }
      } catch (delErr) {
        console.warn("[DePortal Firebase] Notice reading deletedRecords:", delErr.message);
      }

      // 3. Two-Way Collection Reconciliation (Only on forced full scan)
      for (const colName of collections) {
        try {
          const snap = await getDocs(collection(db, colName));
          const cloudDocsMap = new Map();

          if (!snap.empty) {
            for (const docSnap of snap.docs) {
              // Ignore any document that has already been registered as deleted
              if (tombstoneSet.has(docSnap.id) || tombstoneSet.has(`${colName}_${docSnap.id}`)) {
                try { await deleteDoc(doc(db, colName, docSnap.id)); } catch (_) {}
                continue;
              }
              cloudDocsMap.set(docSnap.id, { id: docSnap.id, ...docSnap.data() });
            }
          }

          if (!localDb[colName]) localDb[colName] = [];
          const currentLocal = Array.isArray(localDb[colName]) ? localDb[colName] : [];
          const reconciledLocal = [];
          const seenIds = new Set();

          // A. Process existing local records:
          for (const item of currentLocal) {
            if (!item || !item.id || seenIds.has(item.id)) continue;

            if (tombstoneSet.has(item.id) || tombstoneSet.has(`${colName}_${item.id}`)) {
              changed = true;
              continue;
            }

            seenIds.add(item.id);

            if (cloudDocsMap.has(item.id)) {
              const cloudData = cloudDocsMap.get(item.id);
              if (colName === "payments" && window.RichVineDB?.getPaymentBreakdown) {
                const b = window.RichVineDB.getPaymentBreakdown(cloudData);
                cloudData.termFeePaid = b.termFeePaid;
                cloudData.arrearsDeducted = b.arrearsRecovered;
                cloudData.otherFeesPaid = b.otherFeesPaid;
              }
              reconciledLocal.push({ ...item, ...cloudData });
              cloudDocsMap.delete(item.id);
            } else {
              if (item._pendingUpload === true) {
                reconciledLocal.push(item);
                try {
                  const clean = this._sanitize(item);
                  delete clean._pendingUpload;
                  await setDoc(doc(db, colName, item.id), clean, { merge: true });
                  delete item._pendingUpload;
                  console.log(`[DePortal Firebase] Pushed offline record to Cloud: ${colName}/${item.id}`);
                  changed = true;
                } catch (upErr) {
                  console.warn(`[DePortal Firebase] Failed to push ${colName}/${item.id}:`, upErr.message);
                }
              } else {
                console.log(`[DePortal Firebase] Purged remotely deleted record from local: ${colName}/${item.id}`);
                localDb._tombstones[item.id] = Date.now();
                changed = true;
              }
            }
          }

          // B. Add new Cloud records not yet in local storage:
          for (const [cId, cloudData] of cloudDocsMap.entries()) {
            if (seenIds.has(cId) || tombstoneSet.has(cId) || tombstoneSet.has(`${colName}_${cId}`)) continue;
            seenIds.add(cId);

            if (colName === "payments" && window.RichVineDB?.getPaymentBreakdown) {
              const b = window.RichVineDB.getPaymentBreakdown(cloudData);
              cloudData.termFeePaid = b.termFeePaid;
              cloudData.arrearsDeducted = b.arrearsRecovered;
              cloudData.otherFeesPaid = b.otherFeesPaid;
            }
            reconciledLocal.unshift(cloudData);
            changed = true;
          }

          localDb[colName] = reconciledLocal;
        } catch (colErr) {
          console.warn(`[DePortal Firebase] Error syncing collection ${colName}:`, colErr.message);
        }
      }

      localDb._hasCloudSynced = true;

      // Safe deduplication and student balance rebalancing
      if (window.RichVineDB) {
        if (window.RichVineDB.cleanDuplicatePayments) {
          const dupRes = window.RichVineDB.cleanDuplicatePayments(localDb);
          if (dupRes && dupRes.removedCount > 0) changed = true;
        }
        if (window.RichVineDB.recalculateAllStudentBalances) {
          window.RichVineDB.recalculateAllStudentBalances(localDb);
        }
      }

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        if (window.RichVineApp && window.RichVineApp.refreshCurrentTab) {
          window.RichVineApp.refreshCurrentTab();
        }
      }

      localStorage.setItem("dps_last_cloud_sync", String(Date.now()));
      this.ready = true;
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[DePortal Firebase] Manual cloud reconciliation complete ✓");
    } catch (e) {
      console.warn("[DePortal Firebase] Sync notice:", e.message);
      this._setSyncStatus("offline", "Offline Mode");
    } finally {
      this._syncing = false;
    }
  },

  async pullFromCloud() {
    return this.syncWithCloud(true);
  },

  async syncAllStudents(studentsList) {
    try {
      const list = studentsList || (window.RichVineDB ? window.RichVineDB.getStudents() : []);
      if (!list || !list.length) return { success: true, count: 0 };
      
      console.log(`[Firebase] Beginning batch upload of ${list.length} learners to Cloud Firestore...`);
      const CHUNK_SIZE = 200;
      let uploaded = 0;
      
      for (let i = 0; i < list.length; i += CHUNK_SIZE) {
        const chunk = list.slice(i, i + CHUNK_SIZE);
        const batch = writeBatch(db);
        chunk.forEach(st => {
          if (!st || !st.id) return;
          const clean = this._sanitize(st);
          clean.updatedAt = new Date().toISOString();
          delete clean._pendingUpload;
          batch.set(doc(db, "students", st.id), clean, { merge: true });
        });
        await batch.commit();
        uploaded += chunk.length;
        console.log(`[Firebase] Synced batch ${uploaded} / ${list.length} students to Cloud ✓`);
      }
      
      this._setSyncStatus("synced", `Cloud Synced (${uploaded} Learners)`);
      return { success: true, count: uploaded };
    } catch (e) {
      console.warn("[Firebase] syncAllStudents error:", e.message);
      this._setSyncStatus("error", "Sync Pending");
      return { success: false, error: e.message };
    }
  },

  // ── Students ────────────────────────────────────────────────────────────
  async saveStudent(student) {
    try {
      if (!student || !student.id) return;
      const clean = this._sanitize(student);
      clean.updatedAt = new Date().toISOString();
      await setDoc(doc(db, "students", student.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Student synced to cloud:", student.id);
    } catch (e) {
      console.warn("[Firebase] saveStudent failed:", e.message);
      this._setSyncStatus("error", "Sync Pending");
    }
  },

  async deleteStudent(id) {
    try {
      await deleteDoc(doc(db, "students", id));
      await this.recordCloudDeletion("students", id);
      console.log("[Firebase] Student permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteStudent failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "students", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },

  // ── Payments ────────────────────────────────────────────────────────────
  async savePayment(payment) {
    try {
      if (!payment || !payment.id) return;
      const clean = this._sanitize(payment);
      await setDoc(doc(db, "payments", payment.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Payment synced to cloud:", payment.id);
    } catch (e) {
      console.warn("[Firebase] savePayment failed:", e.message);
      this._setSyncStatus("error", "Sync Pending");
    }
  },

  async deletePayment(id) {
    try {
      await deleteDoc(doc(db, "payments", id));
      await this.recordCloudDeletion("payments", id);
      console.log("[Firebase] Payment permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deletePayment failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "payments", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },

  // ── Expenses ────────────────────────────────────────────────────────────
  async saveExpenses(expensesList) {
    if (!Array.isArray(expensesList) || !expensesList.length) return;
    try {
      const chunkSize = 400;
      for (let i = 0; i < expensesList.length; i += chunkSize) {
        const chunk = expensesList.slice(i, i + chunkSize);
        const batch = writeBatch(db);
        chunk.forEach(expense => {
          if (!expense || !expense.id) return;
          const clean = this._sanitize(expense);
          batch.set(doc(db, "expenses", expense.id), clean, { merge: true });
        });
        await batch.commit();
      }
      this._setSyncStatus("synced", "Cloud Synced");
      console.log(`[Firebase] Synced ${expensesList.length} expenses to cloud ✓`);
    } catch (e) {
      console.warn("[Firebase] Batch saveExpenses failed, falling back to individual:", e.message);
      for (const expense of expensesList) {
        await this.saveExpense(expense);
      }
    }
  },

  async saveExpense(expense) {
    try {
      if (!expense || !expense.id) return;
      const clean = this._sanitize(expense);
      await setDoc(doc(db, "expenses", expense.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveExpense failed:", e.message);
    }
  },

  async deleteExpense(id) {
    try {
      await deleteDoc(doc(db, "expenses", id));
      await this.recordCloudDeletion("expenses", id);
      console.log("[Firebase] Expense permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteExpense failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "expenses", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },

  // ── Staff & Salary ────────────────────────────────────────────────────────
  async saveStaff(staff) {
    try {
      if (!staff || !staff.id) return;
      const clean = this._sanitize(staff);
      await setDoc(doc(db, "staff", staff.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStaff failed:", e.message);
    }
  },

  async deleteStaff(id) {
    try {
      await deleteDoc(doc(db, "staff", id));
      await this.recordCloudDeletion("staff", id);
      console.log("[Firebase] Staff permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteStaff failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "staff", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },

  async saveSalary(salary) {
    try {
      if (!salary || !salary.id) return;
      const clean = this._sanitize(salary);
      await setDoc(doc(db, "salaries", salary.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveSalary failed:", e.message);
    }
  },

  async deleteSalary(id) {
    try {
      await deleteDoc(doc(db, "salaries", id));
      await this.recordCloudDeletion("salaries", id);
      console.log("[Firebase] Salary permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteSalary failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "salaries", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },
  async saveStaffLoan(loan) {
    try {
      if (!loan || !loan.id) return;
      const clean = this._sanitize(loan);
      await setDoc(doc(db, "staffLoans", loan.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStaffLoan failed:", e.message);
    }
  },

  async deleteStaffLoan(id) {
    try {
      await deleteDoc(doc(db, "staffLoans", id));
      await this.recordCloudDeletion("staffLoans", id);
      console.log("[Firebase] Staff loan permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteStaffLoan failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "staffLoans", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },

  // ── Inventory & Stocks ──────────────────────────────────────────────────
  async saveStockItem(item) {
    try {
      if (!item || !item.id) return;
      const clean = this._sanitize(item);
      await setDoc(doc(db, "stocks", item.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStockItem failed:", e.message);
    }
  },

  async saveStockSale(sale) {
    try {
      if (!sale || !sale.id) return;
      const clean = this._sanitize(sale);
      await setDoc(doc(db, "stockSales", sale.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStockSale failed:", e.message);
    }
  },

  async saveStockRestock(restock) {
    try {
      if (!restock || !restock.id) return;
      const clean = this._sanitize(restock);
      await setDoc(doc(db, "stockRestocks", restock.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] saveStockRestock failed:", e.message);
    }
  },

  async deleteStockItem(id) {
    try {
      await deleteDoc(doc(db, "stocks", id));
      await this.recordCloudDeletion("stocks", id);
    } catch (e) {
      console.warn("[Firebase] deleteStockItem failed:", e.message);
    }
  },

  // ── CBT Examination Submissions ─────────────────────────────────────────
  async saveCbtSubmission(submission) {
    try {
      if (!submission || !submission.id) return;
      const clean = this._sanitize(submission);
      clean.updatedAt = new Date().toISOString();
      await setDoc(doc(db, "cbtSubmissions", submission.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] CBT submission synced to cloud:", submission.id);
    } catch (e) {
      console.warn("[Firebase] saveCbtSubmission failed:", e.message);
    }
  },

  async deleteCbtSubmission(id) {
    try {
      await deleteDoc(doc(db, "cbtSubmissions", id));
      await this.recordCloudDeletion("cbtSubmissions", id);
      console.log("[Firebase] CBT submission permanently deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteCbtSubmission failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "cbtSubmissions", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },

  // ── Audit Logs (Local Storage Managed - Zero Quota Overhead) ────────────
  // ── CBT Assessments (Assignments, Tests & Exams) ────────────────────────
  async saveCbtAssessment(assessment) {
    try {
      if (!assessment || !assessment.id) return;
      const clean = this._sanitize(assessment);
      clean.updatedAt = new Date().toISOString();
      await setDoc(doc(db, "cbtAssessments", assessment.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] CBT assessment synced to cloud:", assessment.id);
    } catch (e) {
      console.warn("[Firebase] saveCbtAssessment failed:", e.message);
    }
  },

  async deleteCbtAssessment(id) {
    try {
      await deleteDoc(doc(db, "cbtAssessments", id));
      await this.recordCloudDeletion("cbtAssessments", id);
      console.log("[Firebase] CBT assessment deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] deleteCbtAssessment failed/offline:", e.message);
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      if (!localDb._pendingDeletes) localDb._pendingDeletes = [];
      localDb._pendingDeletes.push({ col: "cbtAssessments", id });
      if (window.RichVineDB) window.RichVineDB.save(localDb);
    }
  },
  async saveTeacher(teacher) {
    if (!db || !teacher?.id) return;
    try {
      const clean = this._sanitize(teacher);
      await setDoc(doc(db, "teachers", teacher.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Teacher synced to cloud:", teacher.id);
    } catch (e) {
      console.warn("[Firebase] Error saving teacher to cloud:", e.message);
    }
  },

  async deleteTeacher(id) {
    if (!db || !id) return;
    try {
      await this.recordCloudDeletion("teachers", id);
      await deleteDoc(doc(db, "teachers", id));
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Teacher deleted from cloud:", id);
    } catch (e) {
      console.warn("[Firebase] Error deleting teacher from cloud:", e.message);
    }
  },

  async saveDailyAttendance(attendanceRecord) {
    if (!db || !attendanceRecord?.id) return;
    try {
      const clean = this._sanitize(attendanceRecord);
      await setDoc(doc(db, "attendance", attendanceRecord.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Attendance synced to cloud:", attendanceRecord.id);
    } catch (e) {
      console.warn("[Firebase] Error saving attendance to cloud:", e.message);
    }
  },

  async deleteDailyAttendance(id) {
    if (!db || !id) return;
    try {
      await this.recordCloudDeletion("attendance", id);
      await deleteDoc(doc(db, "attendance", id));
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] Error deleting attendance from cloud:", e.message);
    }
  },

    async saveWeeklyPerformance(record) {
    if (!db || !record?.id) return;
    try {
      const clean = this._sanitize(record);
      await setDoc(doc(db, "weeklyPerformance", record.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Weekly performance record synced to cloud:", record.id);
    } catch (e) {
      console.warn("[Firebase] Error saving weekly performance to cloud:", e.message);
    }
  },

  async deleteWeeklyPerformance(id) {
    if (!db || !id) return;
    try {
      await this.recordCloudDeletion("weeklyPerformance", id);
      await deleteDoc(doc(db, "weeklyPerformance", id));
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] Error deleting weekly performance from cloud:", e.message);
    }
  },

  async saveExamRecord(record) {
    if (!db || !record?.id) return;
    try {
      const clean = this._sanitize(record);
      await setDoc(doc(db, "examRecords", record.id), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] Exam record synced to cloud:", record.id);
    } catch (e) {
      console.warn("[Firebase] Error saving exam record to cloud:", e.message);
    }
  },

  async deleteExamRecord(id) {
    if (!db || !id) return;
    try {
      await this.recordCloudDeletion("examRecords", id);
      await deleteDoc(doc(db, "examRecords", id));
      this._setSyncStatus("synced", "Cloud Synced");
    } catch (e) {
      console.warn("[Firebase] Error deleting exam record from cloud:", e.message);
    }
  },

  async saveSchoolConfig(config) {
    if (!db || !config) return;
    try {
      const clean = this._sanitize(config);
      clean.updatedAt = new Date().toISOString();
      await setDoc(doc(db, "schoolSettings", "institutionalConfig"), clean, { merge: true });
      await setDoc(doc(db, "schoolConfig", "current"), clean, { merge: true });
      this._setSyncStatus("synced", "Cloud Synced");
      console.log("[Firebase] School configuration successfully synced to cloud.");
    } catch (e) {
      console.warn("[Firebase] Error saving school config to cloud:", e.message);
    }
  },

  async saveLog(log) {
    // Audit logs are stored & pruned in RichVineDB (localStorage).
    // Cloud writes to Firestore "auditLogs" are disabled to protect free tier quotas.
    return Promise.resolve();
  },

  // Lightweight sync for CBT Examination Portal: protected by 6-hour cache shield
  async syncStudentsOnly(force = false) {
    try {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : {};
      const localStudents = localDb.students || [];
      const lastCbtSync = Number(localStorage.getItem("dps_last_cbt_sync") || 0);
      const now = Date.now();

      // CBT Quota Shield: If students exist locally and were synced within 6 hours, reuse local cache
      if (!force && localStudents.length > 0 && (now - lastCbtSync < 6 * 60 * 60 * 1000)) {
        console.log(`[DePortal Firebase] CBT Quota Shield: Using ${localStudents.length} verified cached students.`);
        this.ready = true;
        return;
      }

      const snap = await getDocs(collection(db, "students"));
      if (!snap.empty) {
        const map = new Map();
        snap.docs.forEach(d => map.set(d.id, { id: d.id, ...d.data() }));
        const current = localDb.students || [];
        const merged = current.map(s => map.has(s.id) ? { ...s, ...map.get(s.id) } : s);
        map.forEach((val, id) => {
          if (!merged.some(s => s.id === id)) merged.push(val);
        });
        localDb.students = merged;
        if (window.RichVineDB) window.RichVineDB.save(localDb);
        localStorage.setItem("dps_last_cbt_sync", String(now));
      }
      this.ready = true;
    } catch (e) {
      console.warn("[Firebase] syncStudentsOnly notice:", e.message);
    }
  },

  // ── Realtime Multi-Device Listeners (Cached & Debounced) ─────────────────
  initRealtimeSync(callbacks = {}) {
    if (this._realtimeActive) return;
    this._realtimeActive = true;

    // 0. Listen for Deleted Records (Tombstones) to purge deletions instantly everywhere
    onSnapshot(collection(db, "deletedRecords"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      let changed = false;
      if (!localDb._tombstones) localDb._tombstones = {};

      snap.docChanges().forEach(change => {
        if (change.type === "added" || change.type === "modified") {
          const data = change.doc.data();
          const col = data?.col;
          const targetId = data?.targetId || change.doc.id;
          if (targetId) localDb._tombstones[targetId] = data?.deletedAt || Date.now();

          if (col && targetId && Array.isArray(localDb[col])) {
            const before = localDb[col].length;
            localDb[col] = localDb[col].filter(it => it && it.id !== targetId);
            if (localDb[col].length !== before) {
              changed = true;
              console.log(`[Realtime] Purged deleted item from local ${col}:`, targetId);
            }
          }
        }
      });

      if (changed && window.RichVineDB) {
        if (window.RichVineDB.cleanDuplicatePayments) window.RichVineDB.cleanDuplicatePayments(localDb);
        if (window.RichVineDB.recalculateAllStudentBalances) window.RichVineDB.recalculateAllStudentBalances(localDb);
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (window.RichVineApp && window.RichVineApp.refreshCurrentTab) {
            window.RichVineApp.refreshCurrentTab();
          }
        });
      }
    }, e => console.warn("[Realtime] deletedRecords warning:", e.message));

    // 1. Listen for Students
    onSnapshot(collection(db, "students"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = (localDb.students || []).findIndex(s => s.id === data.id);
          if (idx === -1) {
            if (!localDb.students) localDb.students = [];
            localDb.students.unshift(data);
            changed = true;
          } else {
            localDb.students[idx] = { ...localDb.students[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.students = (localDb.students || []).filter(s => s.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onStudentsChange) callbacks.onStudentsChange(localDb.students);
          if (callbacks.onPaymentsChange) callbacks.onPaymentsChange(localDb.payments);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => {
      console.warn("[Realtime] students sync warning:", e.message);
      this._setSyncStatus("offline", "Offline");
    });

    // 2. Listen for Payments
    onSnapshot(collection(db, "payments"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          if (window.RichVineDB && window.RichVineDB.getPaymentBreakdown) {
            const b = window.RichVineDB.getPaymentBreakdown(data);
            data.termFeePaid = b.termFeePaid;
            data.arrearsDeducted = b.arrearsRecovered;
            data.otherFeesPaid = b.otherFeesPaid;
          }
          const idx = (localDb.payments || []).findIndex(p => p.id === data.id);
          if (idx === -1) {
            if (!localDb.payments) localDb.payments = [];
            localDb.payments.unshift(data);
            changed = true;
          } else {
            localDb.payments[idx] = { ...localDb.payments[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.payments = (localDb.payments || []).filter(p => p.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        if (window.RichVineDB.cleanDuplicatePayments) window.RichVineDB.cleanDuplicatePayments(localDb);
        if (window.RichVineDB.recalculateAllStudentBalances) window.RichVineDB.recalculateAllStudentBalances(localDb);
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onPaymentsChange) callbacks.onPaymentsChange(localDb.payments);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] payments sync warning:", e.message));

    // 3. Listen for Stocks
    onSnapshot(collection(db, "stocks"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.stocks) localDb.stocks = [];
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.stocks.findIndex(s => s.id === data.id);
          if (idx === -1) { localDb.stocks.unshift(data); changed = true; }
          else { localDb.stocks[idx] = { ...localDb.stocks[idx], ...data }; changed = true; }
        } else if (change.type === "removed") {
          localDb.stocks = localDb.stocks.filter(s => s.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        if (window.RichVineDB.recalculateStockQuantities) window.RichVineDB.recalculateStockQuantities(localDb);
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onStocksChange) callbacks.onStocksChange(localDb.stocks);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] stocks sync warning:", e.message));

    // 4. Listen for Stock Sales
    onSnapshot(collection(db, "stockSales"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.stockSales) localDb.stockSales = [];
      let changed = false;

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.stockSales.findIndex(s => s.id === data.id);
          if (idx === -1) { localDb.stockSales.unshift(data); changed = true; }
          else { localDb.stockSales[idx] = { ...localDb.stockSales[idx], ...data }; changed = true; }
        } else if (change.type === "removed") {
          localDb.stockSales = localDb.stockSales.filter(s => s.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        if (window.RichVineDB.recalculateStockQuantities) window.RichVineDB.recalculateStockQuantities(localDb);
        window.RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] stockSales sync warning:", e.message));

    // 5. Listen for Stock Restocks
    onSnapshot(collection(db, "stockRestocks"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.stockRestocks) localDb.stockRestocks = [];
      let changed = false;

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.stockRestocks.findIndex(r => r.id === data.id);
          if (idx === -1) { localDb.stockRestocks.unshift(data); changed = true; }
          else { localDb.stockRestocks[idx] = { ...localDb.stockRestocks[idx], ...data }; changed = true; }
        } else if (change.type === "removed") {
          localDb.stockRestocks = localDb.stockRestocks.filter(r => r.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        if (window.RichVineDB.recalculateStockQuantities) window.RichVineDB.recalculateStockQuantities(localDb);
        window.RichVineDB.save(localDb);
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] stockRestocks sync warning:", e.message));

    // 6. Listen for Expenses
    onSnapshot(collection(db, "expenses"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.expenses) localDb.expenses = [];
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.expenses.findIndex(e => e.id === data.id);
          if (idx === -1) {
            localDb.expenses.unshift(data);
            changed = true;
          } else {
            localDb.expenses[idx] = { ...localDb.expenses[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.expenses = localDb.expenses.filter(e => e.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        const seen = new Set();
        localDb.expenses = localDb.expenses.filter(e => {
          if (!e || !e.id || seen.has(e.id)) return false;
          seen.add(e.id);
          return true;
        });
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onExpensesChange) callbacks.onExpensesChange(localDb.expenses);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] expenses sync warning:", e.message));

    // 7. Listen for CBT Submissions
    onSnapshot(collection(db, "cbtSubmissions"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.cbtSubmissions) localDb.cbtSubmissions = [];
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.cbtSubmissions.findIndex(s => s.id === data.id);
          if (idx === -1) {
            localDb.cbtSubmissions.unshift(data);
            changed = true;
          } else {
            localDb.cbtSubmissions[idx] = { ...localDb.cbtSubmissions[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.cbtSubmissions = localDb.cbtSubmissions.filter(s => s.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onCbtChange) callbacks.onCbtChange(localDb.cbtSubmissions);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] cbtSubmissions sync warning:", e.message));

    // 7b. Listen for CBT Assessments
    onSnapshot(collection(db, "cbtAssessments"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.cbtAssessments) localDb.cbtAssessments = [];
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.cbtAssessments.findIndex(a => a.id === data.id);
          if (idx === -1) {
            localDb.cbtAssessments.unshift(data);
            changed = true;
          } else {
            localDb.cbtAssessments[idx] = { ...localDb.cbtAssessments[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.cbtAssessments = localDb.cbtAssessments.filter(a => a.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onCbtAssessmentsChange) callbacks.onCbtAssessmentsChange(localDb.cbtAssessments);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] cbtAssessments sync warning:", e.message));

    // 8. Listen for Staff
    onSnapshot(collection(db, "staff"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.staff) localDb.staff = [];
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.staff.findIndex(s => s.id === data.id);
          if (idx === -1) {
            localDb.staff.push(data);
            changed = true;
          } else {
            localDb.staff[idx] = { ...localDb.staff[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.staff = localDb.staff.filter(s => s.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onStaffChange) callbacks.onStaffChange(localDb.staff);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] staff sync warning:", e.message));

    // 9. Listen for Salaries
    onSnapshot(collection(db, "salaries"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.salaries) localDb.salaries = [];
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.salaries.findIndex(s => s.id === data.id);
          if (idx === -1) {
            localDb.salaries.unshift(data);
            changed = true;
          } else {
            localDb.salaries[idx] = { ...localDb.salaries[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.salaries = localDb.salaries.filter(s => s.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onSalariesChange) callbacks.onSalariesChange(localDb.salaries);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] salaries sync warning:", e.message));

    // 10. Listen for Staff Loans & Repayments
    onSnapshot(collection(db, "staffLoans"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      if (!localDb.staffLoans) localDb.staffLoans = [];
      let changed = false;
      const tombstones = localDb._tombstones || {};

      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if (tombstones[data.id]) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.staffLoans.findIndex(l => l.id === data.id);
          if (idx === -1) {
            localDb.staffLoans.unshift(data);
            changed = true;
          } else {
            localDb.staffLoans[idx] = { ...localDb.staffLoans[idx], ...data };
            changed = true;
          }
        } else if (change.type === "removed") {
          localDb.staffLoans = localDb.staffLoans.filter(l => l.id !== data.id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (callbacks.onStaffLoansChange) callbacks.onStaffLoansChange(localDb.staffLoans);
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] staffLoans sync warning:", e.message));

    // 11. Listen for Teachers Realtime
    onSnapshot(collection(db, "teachers"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      let changed = false;
      if (!localDb.teachers) localDb.teachers = [];
      const tombstoneSet = new Set(Object.keys(localDb._tombstones || {}));

      snap.docChanges().forEach(change => {
        const d = change.doc.data();
        const id = change.doc.id;
        if (tombstoneSet.has(id)) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.teachers.findIndex(t => t && t.id === id);
          if (idx !== -1) {
            localDb.teachers[idx] = { ...localDb.teachers[idx], ...d, id };
          } else {
            localDb.teachers.push({ id, ...d });
          }
          changed = true;
        } else if (change.type === "removed") {
          localDb.teachers = localDb.teachers.filter(t => t && t.id !== id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (window.RichVineApp && window.RichVineApp.loadTeachersTab) window.RichVineApp.loadTeachersTab();
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] teachers sync warning:", e.message));

    // 12. Listen for Attendance Realtime
    onSnapshot(collection(db, "attendance"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      let changed = false;
      if (!localDb.attendance) localDb.attendance = [];
      const tombstoneSet = new Set(Object.keys(localDb._tombstones || {}));

      snap.docChanges().forEach(change => {
        const d = change.doc.data();
        const id = change.doc.id;
        if (tombstoneSet.has(id)) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.attendance.findIndex(a => a && a.id === id);
          if (idx !== -1) {
            localDb.attendance[idx] = { ...localDb.attendance[idx], ...d, id };
          } else {
            localDb.attendance.push({ id, ...d });
          }
          changed = true;
        } else if (change.type === "removed") {
          localDb.attendance = localDb.attendance.filter(a => a && a.id !== id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (window.RichVineApp && window.RichVineApp.loadAttendanceTab) window.RichVineApp.loadAttendanceTab();
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] attendance sync warning:", e.message));

    // 13. Listen for Exam Records Realtime
    onSnapshot(collection(db, "examRecords"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      let changed = false;
      if (!localDb.examRecords) localDb.examRecords = [];
      const tombstoneSet = new Set(Object.keys(localDb._tombstones || {}));

      snap.docChanges().forEach(change => {
        const d = change.doc.data();
        const id = change.doc.id;
        if (tombstoneSet.has(id)) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.examRecords.findIndex(r => r && r.id === id);
          if (idx !== -1) {
            localDb.examRecords[idx] = { ...localDb.examRecords[idx], ...d, id };
          } else {
            localDb.examRecords.push({ id, ...d });
          }
          changed = true;
        } else if (change.type === "removed") {
          localDb.examRecords = localDb.examRecords.filter(r => r && r.id !== id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (window.RichVineApp && window.RichVineApp.loadExamsRecordsTab) window.RichVineApp.loadExamsRecordsTab();
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] examRecords sync warning:", e.message));

    // 14. Listen for Weekly Performance Realtime
    onSnapshot(collection(db, "weeklyPerformance"), snap => {
      const localDb = window.RichVineDB ? window.RichVineDB.get() : null;
      if (!localDb) return;
      let changed = false;
      if (!localDb.weeklyPerformance) localDb.weeklyPerformance = [];
      const tombstoneSet = new Set(Object.keys(localDb._tombstones || {}));

      snap.docChanges().forEach(change => {
        const d = change.doc.data();
        const id = change.doc.id;
        if (tombstoneSet.has(id)) return;

        if (change.type === "added" || change.type === "modified") {
          const idx = localDb.weeklyPerformance.findIndex(r => r && r.id === id);
          if (idx !== -1) {
            localDb.weeklyPerformance[idx] = { ...localDb.weeklyPerformance[idx], ...d, id };
          } else {
            localDb.weeklyPerformance.push({ id, ...d });
          }
          changed = true;
        } else if (change.type === "removed") {
          localDb.weeklyPerformance = localDb.weeklyPerformance.filter(r => r && r.id !== id);
          changed = true;
        }
      });

      if (changed && window.RichVineDB) {
        window.RichVineDB.save(localDb);
        this._scheduleRefresh(() => {
          if (window.RichVineApp && window.RichVineApp.renderAdminWeeklyPerformance) window.RichVineApp.renderAdminWeeklyPerformance();
        });
      }
      this._setSyncStatus("synced", "Cloud Synced");
    }, e => console.warn("[Realtime] weeklyPerformance sync warning:", e.message));
  }
};

// Context-aware initialization
if (typeof window !== "undefined") {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("dashboard.html")) {
    setTimeout(() => {
      if (window.RichVineFirebase && window.RichVineFirebase.syncWithCloud) {
        // Zero-read flush of pending offline changes
        window.RichVineFirebase.syncWithCloud(false);
      }
    }, 800);
  } else if (path.includes("teacher-portal")) {
    setTimeout(() => {
      if (window.RichVineFirebase && window.RichVineFirebase.syncWithCloud) {
        window.RichVineFirebase.syncWithCloud(false);
      }
    }, 800);
  } else if (path.includes("cbt")) {
    setTimeout(() => {
      if (window.RichVineFirebase && window.RichVineFirebase.syncStudentsOnly) {
        // Cached verification with 6-hour quota shield
        window.RichVineFirebase.syncStudentsOnly(false);
      }
    }, 400);
  }
}
