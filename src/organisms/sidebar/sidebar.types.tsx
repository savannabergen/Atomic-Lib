import { Room } from "@/molecules/roomlist/types";

export interface Participant {
  id: number;
  email: string;
}

export interface SidebarProps {
  rooms: Room[];
  participants: Participant[];
  onRoomChange: (room: Room) => void;
}
