import React from "react";
import { RoomItemProps } from "./roomitem.types";

export const RoomItem: React.FC<RoomItemProps> = ({ room, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
    >
      <span>{room.name}</span>
    </div>
  );
};
