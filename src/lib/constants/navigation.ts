export type NavigationItem = {
  label: string;
  href: string;
};

export const publicNavigation: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Cari Kamar", href: "/rooms" },
  { label: "Admin", href: "/admin" },
];

export const adminNavigation: NavigationItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Kelola Kamar", href: "/admin/rooms" },
];