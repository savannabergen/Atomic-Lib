import React from "react";
import { LoginFormFields } from "@/molecules/loginformfields/LoginFormFields";
import { LoginFormActions } from "@/molecules/loginformactions/LoginFormActions";
import { LoginFormProps } from "./loginform.types";

export const LoginForm: React.FC<LoginFormProps> = ({
  formFields,
  formActions,
}) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f7f7f7",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <div style={{ flex: 1, padding: "10px" }}>
        <LoginFormFields {...formFields} />
      </div>
      <div
        style={{
          padding: "10px 0",
          borderTop: "1px solid #ddd",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <LoginFormActions {...formActions} />
      </div>
    </form>
  );
};
