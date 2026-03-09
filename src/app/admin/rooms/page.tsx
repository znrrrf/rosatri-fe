import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { roomStatusConfig } from "@/features/rooms/constants/status";
import { mockRooms } from "@/features/rooms/data/mock-rooms";
import { formatRupiah } from "@/lib/utils/formatters";

export default function AdminRoomsPage() {
  return (
    <Box className="space-y-6">
      <Card className="border border-slate-200">
        <CardContent className="space-y-4 p-8">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography color="primary" variant="overline">
                Room Management
              </Typography>
              <Typography component="h1" variant="h4">
                Kelola data kamar kos
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mt: 1.5, maxWidth: 760 }}
              >
                Tabel ini adalah fondasi untuk fitur CRUD kamar, upload foto,
                status ketersediaan, dan sinkronisasi data dari backend admin.
              </Typography>
            </Box>
            <Box>
              <Button
                disabled
                startIcon={<AddRoundedIcon />}
                variant="contained"
              >
                Tambah Kamar
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <TableContainer className="rounded-3xl border border-slate-200 bg-white">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama Kamar</TableCell>
              <TableCell>Lokasi</TableCell>
              <TableCell>Harga / bulan</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Fasilitas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockRooms.map((room) => {
              const status = roomStatusConfig[room.status];

              return (
                <TableRow key={room.id} hover>
                  <TableCell>{room.name}</TableCell>
                  <TableCell>{room.location}</TableCell>
                  <TableCell>{formatRupiah(room.price)}</TableCell>
                  <TableCell>
                    <Chip
                      color={status.color}
                      label={status.label}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography color="text.secondary" variant="body2">
                      {room.facilities.join(", ")}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
