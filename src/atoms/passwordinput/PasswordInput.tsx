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
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
      {...props}
    />
  );
};
