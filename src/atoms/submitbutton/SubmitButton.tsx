import React from "react";
import { SubmitButtonProps } from "./submitbutton.types";

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
};
