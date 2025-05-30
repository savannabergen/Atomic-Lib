import React from "react";
import { EmailInput } from "@/atoms/emailinput/EmailInput";
import { PasswordInput } from "@/atoms/passwordinput/PasswordInput";
import { LoginFormFieldsProps } from "./loginformfields.types";

export const LoginFormFields: React.FC<LoginFormFieldsProps> = ({
  email,
  password,
}) => {
  console.log("Email prop:", email);
  console.log("Password prop:", password);

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <EmailInput {...email} />
      </div>
      <PasswordInput {...password} />
    </div>
  );
};
