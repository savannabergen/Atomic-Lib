import React from "react";
import { MessageBubble } from "@/atoms/messagebubble/MessageBubble";
import { MessageProps } from "./message.types";

export const Message = ({ message }: MessageProps) => {
  return (
    <MessageBubble
      text={message.text}
      timestamp={message.timestamp}
      sender={message.sender}
    />
  );
};
