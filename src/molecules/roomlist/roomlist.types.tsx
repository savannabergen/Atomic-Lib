import { Room } from "./types";

export interface RoomListProps {
  rooms: Room[];
  onRoomChange: (room: Room) => void;
}
