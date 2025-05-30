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
        text: "Hello, world!",
        timestamp: "12:00 PM",
        sender: { id: 1, name: "John Doe" },
      },
      {
        id: 2,
        text: "Hi!",
        timestamp: "12:01 PM",
        sender: { id: 2, name: "Jane Doe" },
      },
    ]}
    onSendMessage={(text) => console.log(text)}
    placeholder="Type a message..."
  />
);
