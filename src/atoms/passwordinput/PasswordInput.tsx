import React from "react";
import { PasswordInputProps } from "./passwordinput.types";

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = "Password",
  ...props
}) => {
  return (
    <input
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};
