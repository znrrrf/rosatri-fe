# Rosatri Kos Frontend

Setup awal frontend untuk web kos-kosan menggunakan **Next.js App Router**, **TypeScript**, **Tailwind CSS v4**, dan **MUI**.

Project ini dipisahkan menjadi 2 area utama:

- **Public/User** → untuk pencari kamar kos.
- **Admin** → untuk pengelola kamar kos.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Material UI 7

## Endpoint Awal

- `/` → landing page public
- `/rooms` → daftar kamar untuk user
- `/admin` → dashboard admin
- `/admin/rooms` → halaman kelola kamar

## Menjalankan Project

```bash
npm install
npm run dev
```

Untuk quality check:

```bash
npm run lint
npm run typecheck
npm run build
```

## Struktur Folder

```text
src/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── rooms/page.tsx
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── rooms/page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── common/
│   └── layout/
├── features/
│   └── rooms/
│       ├── components/
│       ├── constants/
│       └── data/
├── lib/
│   ├── constants/
│   └── utils/
├── theme/
└── types/
```

## Aturan Penempatan File

### 1. `src/app`

Tempat route dan layout Next.js.

- simpan file `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` di sini sesuai kebutuhan route
- route public taruh di `src/app/(public)`
- route admin taruh di `src/app/admin`

### 2. `src/components/common`

Untuk komponen reusable lintas domain.

Contoh:

- card statistik
- heading section
- empty state
- modal generik

Jika komponen bisa dipakai di public **dan** admin, taruh di sini.

### 3. `src/components/layout`

Untuk komponen layout global.

Contoh:

- navbar public
- footer public
- sidebar admin
- topbar admin

### 4. `src/features`

Untuk komponen dan logic berbasis domain fitur.

Contoh untuk fitur kamar:

- `src/features/rooms/components`
- `src/features/rooms/data`
- `src/features/rooms/constants`

Kalau nanti ada fitur booking, auth, wishlist, review, buat folder baru sendiri di dalam `features`.

### 5. `src/lib`

Untuk utilitas dan konfigurasi non-UI.

Contoh:

- `constants/` → site config, navigation, env key
- `utils/` → formatter rupiah, helper tanggal, helper string

Kalau nanti backend Express sudah siap, API client bisa diletakkan di salah satu pola berikut:

- `src/lib/api/` untuk client global
- atau `src/features/<feature>/services/` jika mau per domain

### 6. `src/theme`

Tempat konfigurasi MUI theme.

Semua hal seperti:

- warna brand
- radius
- typography
- override button/card/chip

disimpan di sini supaya styling konsisten.

### 7. `src/types`

Untuk type/interface global.

Contoh:

- `Room`
- `User`
- `Booking`
- `ApiResponse<T>`

## Konvensi Kerja yang Disarankan

- Gunakan **MUI** untuk fondasi komponen UI dan accessibility.
- Gunakan **Tailwind** untuk spacing, layout cepat, dan utilitas kecil.
- Simpan data mock hanya di `features/.../data`.
- Jangan campur logic domain besar langsung di file page.
- Jadikan page tetap tipis, pindahkan komponen/logic ke `components` atau `features`.

## Langkah Lanjutan yang Direkomendasikan

Setelah setup awal ini, tahap berikutnya yang bagus adalah:

1. setup design tokens final dari brand Rosatri
2. membuat auth flow admin
3. membuat API layer ke backend Express
4. menambahkan state management untuk filter dan form
5. membuat halaman detail kamar dan form booking

## Catatan

Saat ini project masih fokus pada **fondasi frontend** dan memakai **mock data** agar struktur project sudah siap sebelum integrasi backend dilakukan.
