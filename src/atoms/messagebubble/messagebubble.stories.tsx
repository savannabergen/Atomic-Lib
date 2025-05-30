import React from "react";
import { Meta } from "@storybook/react";
import { MessageBubble } from "./MessageBubble";

export default {
  title: "Atoms/MessageBubble",
  component: MessageBubble,
} as Meta;

export const Default = () => (
  <MessageBubble
    body="Hello, world!"
    timestamp="12:00 PM"
    sender={{ id: 1, email: "john.doe@example.com" }}
  />
);

export const LongMessage = () => (
  <MessageBubble
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
    timestamp="12:00 PM"
    sender={{ id: 1, email: "john.doe@example.com" }}
  />
);

export const DifferentSender = () => (
  <MessageBubble
    body="Hello, world!"
    timestamp="12:00 PM"
    sender={{ id: 2, email: "jane.doe@example.com" }}
  />
);
