import React from "react";
import type { ButtonProps } from "./button.types";

export const Button = ({ children, onClick }: ButtonProps) => {
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
      `;
      shadowRoot.appendChild(style);
      const button = document.createElement("button");
      button.className = "button";
      if (onClick) {
        button.onclick = onClick;
      }
      button.textContent = String(children);
      shadowRoot.appendChild(button);
    }
  }, [children, onClick]);

  return <div ref={buttonRef} />;
};
