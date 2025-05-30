import React from "react";
import { SendButtonProps } from "./sendbutton.types";

export const SendButton = ({ onClick, disabled = false }: SendButtonProps) => {
  return (
    <button
      style={{
        display: "inline-block",
        backgroundColor: "#3498db",
        color: "#fff",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      Send
    </button>
  );
};
