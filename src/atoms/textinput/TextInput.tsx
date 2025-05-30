import React from "react";
import { TextInputProps } from "./textinput.types";

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
