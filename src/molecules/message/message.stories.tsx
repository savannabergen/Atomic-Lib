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
      id: 1,
      body: "Hello, world!",
      timestamp: "12:00 PM",
      sender: { id: 1, email: "john.doe@example.com" },
    }}
  />
);
