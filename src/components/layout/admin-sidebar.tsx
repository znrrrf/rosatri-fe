"use client";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

import { adminNavigation } from "@/lib/constants/navigation";

const iconByHref = {
  "/admin": <DashboardRoundedIcon fontSize="small" />,
  "/admin/rooms": <MeetingRoomRoundedIcon fontSize="small" />,
};

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Paper
      className="border border-slate-200 p-4"
      sx={{ position: "sticky", top: 24 }}
    >
      <Typography variant="h6">Admin Panel</Typography>
      <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
        Gunakan area ini untuk memantau performa dan mengelola kamar kos.
      </Typography>

      <Stack sx={{ mt: 3 }} spacing={1}>
        {adminNavigation.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Button
              href={item.href}
              key={item.href}
              startIcon={iconByHref[item.href as keyof typeof iconByHref]}
              sx={{ justifyContent: "flex-start", px: 2 }}
              variant={isActive ? "contained" : "text"}
            >
              {item.label}
            </Button>
          );
        })}
      </Stack>

      <Box className="mt-6 rounded-3xl bg-slate-900 p-4 text-white">
        <Typography variant="subtitle2">Next step</Typography>
        <Typography sx={{ mt: 1 }} variant="body2">
          Saat backend Express siap, sambungkan data kamar ke area admin dari
          sini.
        </Typography>
      </Box>
    </Paper>
  );
}
