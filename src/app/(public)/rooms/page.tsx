import { Box, Container } from "@mui/material";

import { SectionHeading } from "@/components/common/section-heading";
import { RoomCard } from "@/features/rooms/components/room-card";
import { mockRooms } from "@/features/rooms/data/mock-rooms";

export default function RoomsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionHeading
        eyebrow="Public area"
        title="Daftar kamar kos"
        description="Halaman ini menjadi dasar untuk fitur pencarian, filter, sorting, dan integrasi data kamar dari backend di tahap berikutnya."
      />

      <Box className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mockRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </Box>
    </Container>
  );
}