import React from "react";
import { RoomListProps } from "./roomlist.types";
import { RoomItem } from "@/atoms/roomitem/RoomItem";

export const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
  return (
    <ul>
      {rooms.map((room) => (
        <li key={room.id}>
          <RoomItem room={room} />
        </li>
      ))}
    </ul>
  );
};
