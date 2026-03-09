import type { ChipProps } from "@mui/material";

import type { RoomStatus } from "@/types/room";

type ChipColor = NonNullable<ChipProps["color"]>;

export const roomStatusConfig: Record<
  RoomStatus,
  { label: string; color: ChipColor }
> = {
  available: { label: "Tersedia", color: "success" },
  limited: { label: "Sisa Sedikit", color: "warning" },
  full: { label: "Penuh", color: "default" },
};