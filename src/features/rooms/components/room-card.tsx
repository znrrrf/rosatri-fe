import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { roomStatusConfig } from "@/features/rooms/constants/status";
import { formatRupiah } from "@/lib/utils/formatters";
import type { Room } from "@/types/room";

type RoomCardProps = {
  room: Room;
};

export function RoomCard({ room }: RoomCardProps) {
  const status = roomStatusConfig[room.status];

  return (
    <Card className="h-full border border-slate-200" id={room.id}>
      <CardContent className="flex h-full flex-col gap-5">
        <Box className="rounded-[22px] bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white">
          <Typography variant="overline">Pilihan Kamar</Typography>
          <Typography sx={{ mt: 1 }} variant="h6">
            {room.name}
          </Typography>
          <Typography sx={{ opacity: 0.9 }} variant="body2">
            {room.location}
          </Typography>
        </Box>

        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
        >
          <Box>
            <Typography color="text.secondary" variant="body2">
              Harga mulai
            </Typography>
            <Typography component="p" variant="h6">
              {formatRupiah(room.price)} / bulan
            </Typography>
          </Box>
          <Chip color={status.color} label={status.label} size="small" />
        </Stack>

        <Stack className="flex-wrap" direction="row" gap={1}>
          {room.facilities.map((facility) => (
            <Chip
              key={facility}
              label={facility}
              size="small"
              variant="outlined"
            />
          ))}
        </Stack>

        <CardActions className="mt-auto px-0 pb-0">
          <Button href={`/rooms#${room.id}`} size="small" variant="outlined">
            Lihat Referensi
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
