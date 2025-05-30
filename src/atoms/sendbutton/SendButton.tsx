import React from "react";
import { SendButtonProps } from "./sendbutton.types";

export const SendButton = ({ onClick, disabled = false }: SendButtonProps) => {
  const buttonRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (buttonRef.current) {
      const shadowRoot = buttonRef.current.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
        .button {
          display: inline-block;
          background-color: #3498db;
          color: #fff;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .button:hover {
          background-color: #2779bd;
        }
        .button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
      shadowRoot.appendChild(style);
      const button = document.createElement("button");
      button.className = "button";
      button.disabled = disabled;
      if (onClick) {
        button.onclick = onClick;
      }
      button.textContent = "Send";
      shadowRoot.appendChild(button);
    }
  }, [onClick, disabled]);
  return <div ref={buttonRef} />;
};
