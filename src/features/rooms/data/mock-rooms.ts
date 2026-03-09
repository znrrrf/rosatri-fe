import type { Room } from "@/types/room";

export const mockRooms: Room[] = [
  {
    id: "melati-premium",
    name: "Kos Melati Premium",
    location: "Seturan, Yogyakarta",
    price: 1250000,
    status: "available",
    facilities: ["AC", "Kamar mandi dalam", "WiFi", "Parkir motor"],
  },
  {
    id: "bougenville-putri",
    name: "Kos Bougenville Putri",
    location: "Babarsari, Yogyakarta",
    price: 950000,
    status: "limited",
    facilities: ["WiFi", "Kasur", "Lemari", "Dapur bersama"],
  },
  {
    id: "cendana-eksklusif",
    name: "Kos Cendana Eksklusif",
    location: "Condongcatur, Yogyakarta",
    price: 1450000,
    status: "available",
    facilities: ["AC", "Laundry", "Cleaning service", "CCTV"],
  },
  {
    id: "angkasa-hemat",
    name: "Kos Angkasa Hemat",
    location: "Gejayan, Yogyakarta",
    price: 800000,
    status: "full",
    facilities: ["WiFi", "Meja belajar", "Parkir", "Akses 24 jam"],
  },
];

export const adminOverview = [
  {
    label: "Total Kamar",
    value: "48",
    helper: "Akumulasi seluruh properti aktif.",
  },
  {
    label: "Kamar Tersedia",
    value: "12",
    helper: "Bisa langsung ditawarkan ke calon penyewa.",
  },
  {
    label: "Okupansi",
    value: "75%",
    helper: "Ringkasan okupansi dari seluruh kos.",
  },
];