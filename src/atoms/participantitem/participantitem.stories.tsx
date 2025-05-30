import React from "react";
import { Meta } from "@storybook/react";
import { ParticipantItem } from "./ParticipantItem";

export default {
  title: "Atoms/ParticipantItem",
  component: ParticipantItem,
} as Meta;

export const Default = () => (
  <ParticipantItem participant={{ id: 1, email: "john.doe@example.com" }} />
);
