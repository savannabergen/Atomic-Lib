import React from "react";
import { RoomItemProps } from "./roomitem.types";

export const RoomItem: React.FC<RoomItemProps> = ({ room, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(room);
    }
  };

  return <div onClick={handleClick}>{room.name}</div>;
};
