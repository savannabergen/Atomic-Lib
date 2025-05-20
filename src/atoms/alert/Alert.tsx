import React from "react";
import type { AlertProps } from "./alert.types";

export const Alert = ({
  children,
  type = "info",
  dismissible = false,
  onDismiss,
  className,
}: AlertProps) => {
  const alertRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (alertRef.current) {
      const shadowRoot = alertRef.current.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
        .alert {
          padding: 16px;
          margin-bottom: 16px;
          border: 1px solid;
          border-radius: 4px;
        }
        .success {
          background-color: #d4edda;
          border-color: #c3e6cb;
          color: #155724;
        }
        .error {
          background-color: #f8d7da;
          border-color: #f5c6cb;
          color: #721c24;
        }
        .warning {
          background-color: #fff3cd;
          border-color: #ffeeba;
          color: #856404;
        }
        .info {
          background-color: #d1ecf1;
          border-color: #bee5eb;
          color: #0c5460;
        }
        .dismissible {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .dismiss-button {
          margin-left: 16px;
          color: #6c757d;
          cursor: pointer;
        }
        .dismiss-button:hover {
          color: #343a40;
        }
      `;
      shadowRoot.appendChild(style);
      const alertContainer = document.createElement("div");
      alertContainer.className = `alert ${type} ${dismissible ? "dismissible" : ""} ${className || ''}`;
      alertContainer.innerHTML = `
        <span>${children}</span>
        ${dismissible ? `<button class="dismiss-button" type="button">×</button>` : ""}
      `;
      const dismissButton = alertContainer.querySelector(".dismiss-button");
      if (dismissButton && onDismiss) {
        dismissButton.addEventListener("click", onDismiss);
      }
      shadowRoot.appendChild(alertContainer);
    }
  }, [children, type, dismissible, onDismiss, className]);

  return <div ref={alertRef} />;
};
