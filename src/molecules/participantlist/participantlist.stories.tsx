import React from "react";
import { Meta } from "@storybook/react";
import { ParticipantList } from "./ParticipantList";

export default {
  title: "Molecules/ParticipantList",
  component: ParticipantList,
} as Meta;

export const Default = () => (
  <ParticipantList
    participants={[
      { id: 1, email: "john.doe@example.com" },
      { id: 2, email: "jane.doe@example.com" },
      { id: 3, email: "bob.smith@example.com" },
    ]}
  />
);
