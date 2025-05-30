import React from "react";
import { Meta } from "@storybook/react";
import { MessageBubble } from "./MessageBubble";

export default {
  title: "Atoms/MessageBubble",
  component: MessageBubble,
} as Meta;

export const Default = () => (
  <MessageBubble
    text="Hello, world!"
    timestamp="12:00 PM"
    sender={{ id: 1, name: "John Doe" }}
  />
);

export const LongMessage = () => (
  <MessageBubble
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
    timestamp="12:00 PM"
    sender={{ id: 1, name: "John Doe" }}
  />
);

export const DifferentSender = () => (
  <MessageBubble
    text="Hello, world!"
    timestamp="12:00 PM"
    sender={{ id: 2, name: "Jane Doe" }}
  />
);
