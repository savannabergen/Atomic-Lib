import React from "react";
import { MessageBubbleProps } from "./messagebubble.types";

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  timestamp,
  sender,
  ...props
}) => {
  return (
    <div className="message-bubble" {...props}>
      <p className="message-text">{text}</p>
      <span className="message-timestamp">{timestamp}</span>
      <span className="message-sender">{sender.name}</span>
    </div>
  );
};
