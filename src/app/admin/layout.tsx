import { Box, Container } from "@mui/material";

import { AdminSidebar } from "@/components/layout/admin-sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className="min-h-screen bg-slate-100 py-6 lg:py-8">
      <Container maxWidth="xl">
        <Box className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <AdminSidebar />
          <Box>{children}</Box>
        </Box>
      </Container>
    </Box>
  );
}