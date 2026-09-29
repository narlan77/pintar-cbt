// CONFIGURASI UTAMA API

const CONFIG = {
  // Spreadsheet ID Utama
  SPREADSHEET_ID: "14EMXDBsryWPzcCE8pAvsii7LMLmRewTcEJ97m3QKxVU",
  
  // URL Web App Deployment Apps Script
  API_URL: "https://script.google.com/macros/s/AKfycbyNmnzZ_7r36WXgdeKLseMymX6FG1ICR1CvgCGYl3SHsfU4H6PhYIIwO2y4iR6RHXjFeQ/exec",
  
  // Daftar Sheet Resmi
  SHEET_NAME: {
    PENGGUNA: "Pengguna",
    PENGATURAN: "Pengaturan",
    BANK_SOAL: "BankSoal",
    HASIL_UJIAN: "HasilUjian"
  }
};

// Tambahkan baris ini agar API_URL terbaca secara global di ujian.html
const API_URL = CONFIG.API_URL;
