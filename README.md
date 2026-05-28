# Website Sejarah Bangunan Bersejarah

Website statis bertema wisata sejarah untuk memperkenalkan Candi Borobudur. Proyek ini dibuat dengan HTML, CSS, dan JavaScript tanpa framework, sehingga mudah dibuka langsung di browser dan mudah diedit untuk kebutuhan sekolah, portofolio, atau materi wisata edukasi.

## Features

- Hero section dengan gambar besar bangunan bersejarah.
- Navigasi sederhana: Beranda, Lokasi, Sejarah, Galeri, Kontak.
- Area iframe placeholder untuk Google Maps atau Street View 360.
- Bagian sejarah berisi nama bangunan, lokasi, tahun dibangun, latar belakang, fakta penting, dan fungsi saat ini.
- Galeri kartu gambar dengan aset lokal.
- Desain responsif bergaya microsite wisata: hero foto besar, header putih-emas, kartu konten terang, dan tipografi tegas.
- JavaScript ringan untuk menu mobile, tahun copyright otomatis, dan animasi galeri.

## Folder Structure

```text
.
|-- AGENTS.md
|-- README.md
|-- index.html
|-- script.js
|-- style.css
`-- assets/
    |-- borobudur-hero.png
    |-- borobudur-relief.png
    `-- borobudur-stupa.png
```

## How To Run

1. Buka folder proyek ini.
2. Klik dua kali `index.html`, atau buka file tersebut melalui browser.
3. Tidak perlu instal dependency karena proyek ini hanya memakai HTML, CSS, dan JavaScript.

Jika ingin menjalankan lewat server lokal, gunakan ekstensi seperti Live Server di VS Code, lalu buka URL yang diberikan ekstensi tersebut.

## How To Replace The Image

1. Masukkan gambar baru ke folder `assets/`.
2. Buka `index.html`.
3. Ganti nilai `src` pada tag gambar, contoh:

```html
<img src="assets/nama-gambar-baru.jpg" alt="Deskripsi gambar" />
```

Untuk hero utama, ubah gambar pada elemen:

```html
<img class="hero-image" src="assets/borobudur-hero.png" alt="..." />
```

Untuk galeri, ubah gambar pada setiap elemen `.gallery-card`.

## How To Replace The Map Embed

1. Buka Google Maps.
2. Cari lokasi bangunan bersejarah.
3. Pilih opsi bagikan atau embed map.
4. Salin kode iframe dari Google Maps.
5. Buka `index.html`, cari bagian `.map-frame`, lalu ganti iframe placeholder dengan iframe dari Google Maps.

Contoh bentuk iframe Google Maps:

```html
<iframe
  title="Lokasi Candi Borobudur"
  src="PASTE_GOOGLE_MAPS_EMBED_URL_HERE"
  loading="lazy"
  allowfullscreen
></iframe>
```

Pastikan hanya mengganti bagian iframe, bukan seluruh section lokasi.
