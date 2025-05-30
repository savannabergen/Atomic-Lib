import React from "react";
import { Meta } from "@storybook/react";
import { ChatWindow } from "./ChatWindow";

export default {
  title: "Organisms/ChatWindow",
  component: ChatWindow,
} as Meta;

export const Default = () => (
  <ChatWindow
    messages={[
      {
        id: 1,
        body: "Hello, world!",
        timestamp: "12:00 PM",
        sender: { id: 1, email: "john.doe@example.com" },
      },
      {
        id: 2,
        body: "Hi!",
        timestamp: "12:01 PM",
        sender: { id: 2, email: "jane.doe@example.com" },
      },
    ]}
    onSendMessage={(text) => console.log(text)}
    placeholder="Type a message..."
  />
);
