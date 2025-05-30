import React from "react";
import { SidebarProps } from "./sidebar.types";
import { RoomList } from "@/molecules/roomlist/RoomList";
import { ParticipantList } from "@/molecules/participantlist/ParticipantList";

export const Sidebar: React.FC<SidebarProps> = ({ rooms, participants }) => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h2>Rooms</h2>
      <RoomList rooms={rooms} />
      <h2>Participants</h2>
      <ParticipantList participants={participants} />
    </div>
  );
};
