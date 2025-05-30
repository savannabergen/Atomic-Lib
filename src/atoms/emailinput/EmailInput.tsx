import React from "react";
import { EmailInputProps } from "./emailinput.types";

export const EmailInput: React.FC<EmailInputProps> = ({
  value,
  onChange,
  placeholder = "Email",
  ...props
}) => {
  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};
