import React from "react";
import { SidebarProps } from "./sidebar.types";
import { RoomList } from "@/molecules/roomlist/RoomList";
import { ParticipantList } from "@/molecules/participantlist/ParticipantList";

export const Sidebar: React.FC<SidebarProps> = ({
  rooms,
  participants,
  onRoomChange,
}) => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h2>Rooms</h2>
      <RoomList rooms={rooms} onRoomChange={onRoomChange} />
      <h2>Participants</h2>
      <ParticipantList participants={participants} />
    </div>
  );
};
