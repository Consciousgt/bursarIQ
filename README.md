# BURSARIQ — Universal School Management & Accounting Information System
> *"Every naira accounted for."*

Welcome to **BursarIQ**, a production-grade, zero-hosting-cost school management, double-entry institutional accounting, and Computer-Based Testing (CBT) portal.

---

## ⚡ How to Set Up for ANY School (in 2 Minutes)

You **never** need to touch complex code. You only need to open one single file:
👉 **`school.config.js`** (located right at the root of this folder).

### Step 1: Open `school.config.js` in Notepad or any text editor
Change the following fields to match the new school:
```javascript
schoolName: "YOUR SCHOOL NAME HERE",
acronym: "YSH",
motto: "Excellence & Truth",
address: "Physical Address of the School",
phone: "08012345678",
contactEmail: "info@yourschool.edu.ng",
currentSession: "2026/2027",
currentTerm: "1st Term",
currencySymbol: "₦"
```

### Step 2: Set School Banking Details (for Receipts & Ledgers)
```javascript
bankDetails: {
  bankName: "Guaranty Trust Bank (GTBank)",
  accountName: "YOUR SCHOOL NAME - BURSARY",
  accountNumber: "0123456789"
}
```

### Step 3: Save and Double-Click `dashboard.html` or `index.html`!
The entire software — Landing page, Admin Dashboard, Student Fee Receipts, Staff Loan Ledgers, CBT Exam Slips, and Income & Expenditure statements — will **instantly brand itself** with the new school's identity!

---

## 🔐 Default Demonstration Login Credentials

Open `admin/index.html` or `login.html` to access the administrative dashboard:

| Username | Password | Role | Access Level |
| :--- | :--- | :--- | :--- |
| **admin** | `password123` | Super Administrator | Full Master Control |
| **bursar** | `bursar123` | Chief Bursary Officer | Fee Collection, Loans & Expenses |
| **records**| `record123` | Academic Records Officer | Enrollment & Attendance |

*(You can customize these passwords anytime inside `school.config.js`)*

---

## 🚀 Preloaded Demonstration Data

This template comes preloaded with sample data to immediately showcase the system to proprietors and bursars:
- **10 Sample Students** across Primary, Junior College, and Senior Secondary.
- **8 Payment Transactions** demonstrating the **Arrears-First** recovery deduction.
- **5 Operational Expenses** categorized by section and account.
- **5 Staff Profiles** with designation, base salaries, and active loan balances.
- **Staff Loan Management** with automated salary deduction.
- **Store Inventory** with cost vs. selling prices and low-stock alerts.
- **CBT Examination Results** with WAEC/JAMB format grading.

To reset to a 100% clean database for a new live school session:
1. Log into the Dashboard.
2. Go to **Settings & Database**.
3. Click **Reset to Fresh Blank Session**.

---

## 🌐 Free Online Hosting (Optional)

This system has **zero build dependencies**. You can upload this entire folder directly to:
1. **GitHub Pages** (Free custom domain + SSL)
2. **Firebase Hosting** (`firebase deploy`)
3. **Netlify** (Drag-and-drop the BURSARIQ folder)
4. Or run it **locally / offline** on a school office computer without internet!

---

## 🛡️ Built-in Firebase Quota Shield
BursarIQ uses an aggressive multi-tab IndexedDB cache. A school with up to 1,500 students can run permanently on Google Firebase's free tier with **₦0 / $0 recurring costs**.

*Powered by BursarIQ — Every naira accounted for.*
