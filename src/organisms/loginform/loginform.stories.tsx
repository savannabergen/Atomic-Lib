import React from "react";
import { LoginForm } from "./LoginForm";

export default {
  title: "Organisms/LoginForm",
  component: LoginForm,
};

const formFields = {
  email: {
    value: "",
    onChange: () => {},
    placeholder: "Email",
  },
  password: {
    value: "",
    onChange: () => {},
    placeholder: "Password",
  },
};

const formActions = {
  children: "Login",
  onClick: () => {},
  disabled: false,
};

const Template = () => (
  <LoginForm formFields={formFields} formActions={formActions} />
);

export const Default = Template.bind({});
