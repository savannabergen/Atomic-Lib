import React from "react";
import { Meta } from "@storybook/react";
import { Message } from "./Message";

export default {
  title: "Molecules/Message",
  component: Message,
} as Meta;

export const Default = () => (
  <Message
    message={{
      text: "Hello, world!",
      timestamp: "12:00 PM",
      sender: { id: 1, name: "John Doe" },
    }}
  />
);
