import React, { useState } from "react";
import { LoginFormFields } from "@/molecules/loginformfields/LoginFormFields";
import { LoginFormActions } from "@/molecules/loginformactions/LoginFormActions";

export const LoginForm = () => {
  const [formFields, setFormFields] = useState({
    email: {
      value: "",
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields((prevFormFields) => ({
          ...prevFormFields,
          email: { ...prevFormFields.email, value: event.target.value },
        }));
      },
    },
    password: {
      value: "",
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields((prevFormFields) => ({
          ...prevFormFields,
          password: { ...prevFormFields.password, value: event.target.value },
        }));
      },
    },
  });

  const formActions = {
    children: "Login",
    onClick: () => {
      // Handle form submission here
    },
  };

  return (
    <form>
      <LoginFormFields
        email={formFields.email}
        password={formFields.password}
      />
      <LoginFormActions {...formActions} />
    </form>
  );
};
