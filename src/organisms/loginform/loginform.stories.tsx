import React, { JSX } from "react";
import { LoginForm } from "./LoginForm";
import { LoginFormProps } from "./loginform.types";

export default {
  title: "Organisms/LoginForm",
  component: LoginForm,
};

interface Story {
  (args: LoginFormProps): JSX.Element;
  args?: LoginFormProps;
}

const Template: Story = (args) => <LoginForm {...args} />;

export const Default = Template;
Default.args = {
  formFields: {
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
  },
  formActions: {
    children: "Login",
    disabled: false,
  },
};
