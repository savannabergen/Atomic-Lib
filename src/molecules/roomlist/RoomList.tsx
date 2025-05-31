import React from "react";
import { RoomListProps } from "./roomlist.types";
import { RoomItem } from "@/atoms/roomitem/RoomItem";

export const RoomList: React.FC<RoomListProps> = ({ rooms, onRoomChange }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {rooms.map((room) => (
        <li
          key={room.id}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ccc",
            cursor: "pointer",
          }}
          onClick={() => onRoomChange(room)}
        >
          <RoomItem room={room} />
        </li>
      ))}
    </ul>
  );
};
