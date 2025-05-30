import React from "react";
import { MessageBubbleProps } from "./messagebubble.types";

export const MessageBubble: React.FC<MessageBubbleProps> = ({ body, timestamp, sender, ...props }) => {
  return (
    <div className="message-bubble" {...props}>
      <p className="message-text">{body}</p>
      <span className="message-timestamp">{timestamp}</span>
      <span className="message-sender">{sender.email}</span>
    </div>
  );
};