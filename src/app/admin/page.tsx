import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import { StatCard } from "@/components/common/stat-card";
import { adminOverview } from "@/features/rooms/data/mock-rooms";

export default function AdminDashboardPage() {
  return (
    <Box className="space-y-6">
      <Card className="border border-slate-200">
        <CardContent className="space-y-4 p-8">
          <Typography color="primary" variant="overline">
            Dashboard Admin
          </Typography>
          <Typography component="h1" variant="h4">
            Ringkasan pengelolaan kamar
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            Dashboard ini sudah siap menjadi titik awal untuk monitoring
            okupansi, ketersediaan kamar, dan aksi operasional ketika backend
            Express mulai terhubung.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button href="/admin/rooms" variant="contained">
              Kelola Kamar
            </Button>
            <Button
              startIcon={<SettingsSuggestRoundedIcon />}
              variant="outlined"
            >
              Setup berikutnya
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {adminOverview.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </Box>
    </Box>
  );
}
