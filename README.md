# Doa & Zikir Manasik Haji & Umroh

Aplikasi web modern, bersih, dan ramah pengguna untuk memandu jamaah membaca doa dan zikir manasik haji dan umroh sesuai buku panduan resmi Kementerian Agama / Kementerian Haji.

## ✨ Fitur Unggulan

1. **82 Doa & Zikir Otentik (Bab II - XIV)**
   - Teks Arab berharakat jelas dengan opsi font **Amiri** dan **Scheherazade New**.
   - Dilengkapi teks Latin dan terjemahan Bahasa Indonesia.
   - Ukuran huruf dapat diatur (Standar, Sedang, Besar, Ekstra Besar hingga 42px).
2. **Audio Suara Doa**
   - Pemutar audio bawaan dengan kontrol kecepatan (0.8x, 1.0x, 1.2x) dan pengulangan (1x, 3x, Loop).
3. **Mode Khusus Thawaf & Sa'i**
   - Navigasi putaran 1 sampai 7 dengan doa khusus tiap putaran.
   - Tasbih digital dengan getaran haptic feedback di smartphone.
   - Fitur **Screen Wake Lock** agar layar HP tidak mati saat tawaf/sa'i.
   - Pemutar audio langsung di dalam modal ibadah.
4. **Pencarian Cepat & Filter Berdasarkan Tahapan Ibadah**
   - Cari berdasarkan kata kunci judul, teks arab, atau latin.
   - Filter cepat: Thawaf, Sa'i, Wukuf, Mabit, Lontar Jumrah, Ziarah Madinah, dll.
5. **Mode Tampilan Nyaman di Mata**
   - Warm Paper (krem ramah mata untuk siang hari di tanah suci).
   - Clean White (putih jernih).
   - Night Calm (gelap lembut untuk malam hari di Mina/Muzdalifah).
6. **PWA (Progressive Web App) Ready**
   - Dapat di-install langsung ke layar utama Android & iOS (Add to Home Screen).

---

## 🚀 Panduan Deployment ke Vercel

Aplikasi ini adalah **100% Client-Side Web App** (HTML, Tailwind CSS CDN, Vanilla JS) yang sangat ringan, cepat, dan siap langsung di-deploy ke Vercel tanpa perlu setup build server rumit.

### Opsi 1: Deploy via GitHub (Paling Direkomendasikan)
1. Buka dashboard [Vercel](https://vercel.com).
2. Klik tombol **"Add New..."** -> **"Project"**.
3. Pilih repository GitHub: **`geminipromax28/doa-haji-umroh`**.
4. Klik **"Deploy"**.
5. Website akan langsung aktif dalam hitungan detik dengan domain gratis `https://doa-haji-umroh.vercel.app`!

### Opsi 2: Deploy Cepat via Vercel CLI
Jalankan perintah berikut di terminal:
```bash
npx vercel
```
- Ikuti petunjuk login (jika belum login).
- Konfirmasi pilihan default (`Y`).
- Website akan langsung ter-deploy dan Anda akan mendapatkan URL live.
- Untuk update selanjutnya ke production, jalankan:
  ```bash
  npx vercel --prod
  ```
