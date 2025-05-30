export interface SidebarProps {
  rooms: {
    id: number;
    name: string;
  }[];
  participants: {
    id: number;
    email: string;
  }[];
}
