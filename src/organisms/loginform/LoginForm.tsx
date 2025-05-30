import React from "react";
import { LoginFormFields } from "@/molecules/loginformfields/LoginFormFields";
import { LoginFormActions } from "@/molecules/loginformactions/LoginFormActions";
import { LoginFormProps } from "./loginform.types";

export const LoginForm = ({ formFields, formActions }: LoginFormProps) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <LoginFormFields
        email={formFields.email}
        password={formFields.password}
      />
      <LoginFormActions {...formActions} />
    </form>
  );
};
