import React from "react";
import { Message } from "@/molecules/message/Message";
import { MessageInput } from "@/molecules/messageinput/MessageInput";
import { ChatWindowProps } from "./chatwindow.types";

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage, placeholder }) => {
  return (
    <div className="chat-window" style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "20px",
      backgroundColor: "#f7f7f7",
      border: "1px solid #ddd",
      borderRadius: "10px",
    }}>
      <div className="message-list" style={{
        flex: 1,
        overflowY: "auto",
        padding: "10px",
      }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div style={{
        padding: "10px 0",
        borderTop: "1px solid #ddd",
      }}>
        <MessageInput onSendMessage={onSendMessage} placeholder={placeholder} />
      </div>
    </div>
  );
};
