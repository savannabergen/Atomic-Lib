import React from "react";
import { Meta } from "@storybook/react";
import { MessageInput } from "./MessageInput";

export default {
  title: "Molecules/MessageInput",
  component: MessageInput,
} as Meta;

export const Default = () => (
  <MessageInput
    onSendMessage={(message) => console.log(message)}
    placeholder="Type a message..."
  />
);
