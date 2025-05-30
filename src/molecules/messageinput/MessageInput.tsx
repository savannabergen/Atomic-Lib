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
    <div style={{ display: "flex" }}>
      <TextInput
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SendButton onClick={handleSendMessage} />
    </div>
  );
};
