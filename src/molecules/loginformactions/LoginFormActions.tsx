import React from "react";
import { SubmitButton } from "@/atoms/submitbutton/SubmitButton";
import { LoginFormActionsProps } from "./loginformactions.types";

export const LoginFormActions: React.FC<LoginFormActionsProps> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <SubmitButton
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        {...props}
      >
        {children}
      </SubmitButton>
    </div>
  );
};
