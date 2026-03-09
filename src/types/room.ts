export type RoomStatus = "available" | "limited" | "full";

export type Room = {
  id: string;
  name: string;
  location: string;
  price: number;
  status: RoomStatus;
  facilities: string[];
};