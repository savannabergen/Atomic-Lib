export interface RoomItemProps {
  room: {
    id: number;
    name: string;
  };
  onClick?: () => void;
}
