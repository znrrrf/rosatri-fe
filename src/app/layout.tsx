import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppThemeProvider } from "@/components/providers/app-theme-provider";
import { siteConfig } from "@/lib/constants/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["kos", "sewa kamar", "next.js", "mui", "tailwind"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
