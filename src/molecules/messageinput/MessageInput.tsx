import React, { useState } from "react";
import { TextInput } from "@/atoms/textinput/TextInput";
import { SendButton } from "@/atoms/sendbutton/SendButton";
import { MessageInputProps } from "./messageinput.types";

export const MessageInput = ({
  onSendMessage,
  placeholder,
}: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "5px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <div style={{ flex: 1, marginRight: "10px" }}>
        <TextInput
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            outline: "none",
          }}
          placeholder={placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <SendButton onClick={handleSendMessage} />
    </div>
  );
};
