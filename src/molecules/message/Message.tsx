import React from "react";
import { MessageBubble } from "@/atoms/messagebubble/MessageBubble";
import { MessageProps } from "./message.types";

export const Message = ({ message }: MessageProps) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        display: "flex",
        justifyContent: message.sender.id === 1 ? "flex-end" : "flex-start",
      }}
    >
      <MessageBubble
        body={message.body}
        timestamp={message.timestamp}
        sender={message.sender}
      />
    </div>
  );
};
