import { Room } from "@/molecules/roomlist/types";

export interface RoomItemProps {
  room: Room;
  onClick?: (room: Room) => void;
}
