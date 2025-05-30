import React from "react";
import { ParticipantListProps } from "./participantlist.types";
import { ParticipantItem } from "@/atoms/participantitem/ParticipantItem";

export const ParticipantList: React.FC<ParticipantListProps> = ({
  participants,
}) => {
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant.id}>
          <ParticipantItem participant={participant} />
        </li>
      ))}
    </ul>
  );
};
