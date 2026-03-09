import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { SectionHeading } from "@/components/common/section-heading";
import { StatCard } from "@/components/common/stat-card";
import { RoomCard } from "@/features/rooms/components/room-card";
import { mockRooms } from "@/features/rooms/data/mock-rooms";
import { siteConfig } from "@/lib/constants/site";

const highlights = [
  {
    label: "Kamar aktif",
    value: "48+",
    helper: "Struktur awal siap untuk listing kos dari berbagai lokasi.",
  },
  {
    label: "Akses endpoint",
    value: "2 area",
    helper: "Public untuk pencari kamar dan admin untuk pengelola properti.",
  },
  {
    label: "Siap integrasi API",
    value: "Express-ready",
    helper:
      "Frontend sudah dirapikan agar mudah disambungkan ke backend Node.js Express.",
  },
];

export default function HomePage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
      <Box className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <Card className="border border-slate-200">
          <CardContent className="space-y-6 p-8 md:p-10">
            <Chip color="primary" label="Frontend foundation" size="small" />
            <Box>
              <Typography component="h1" variant="h2">
                {siteConfig.tagline}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 780 }}>
                Setup awal ini difokuskan untuk fondasi project FE kos-kosan
                yang rapi, scalable, dan mudah dikembangkan ke fitur pencarian
                kamar serta dashboard admin.
              </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button href="/rooms" size="large" variant="contained">
                Lihat Daftar Kamar
              </Button>
              <Button href="/admin" size="large" variant="outlined">
                Buka Dashboard Admin
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Box className="grid gap-6">
          {highlights.slice(0, 2).map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <SectionHeading
          eyebrow="Arsitektur"
          title="Pembagian area public dan admin"
          description="Area public berfokus pada penemuan kamar, sedangkan area admin dipersiapkan untuk operasional pengelolaan properti dan ketersediaan kamar."
        />
        <Box className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <SectionHeading
          eyebrow="Preview listing"
          title="Contoh kamar yang siap ditampilkan"
          description="Masih menggunakan mock data agar struktur frontend dapat berkembang lebih cepat sebelum backend Express dihubungkan."
        />
        <Box className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockRooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
