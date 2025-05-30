import React from "react";
import { ParticipantItemProps } from "./participantitem.types";

export const ParticipantItem: React.FC<ParticipantItemProps> = ({
  participant,
}) => {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <span>{participant.email}</span>
    </div>
  );
};
