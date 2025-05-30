import React, { JSX } from "react";
import { LoginFormFields } from "./LoginFormFields";
import { LoginFormFieldsProps } from "./loginformfields.types";

export default {
  title: "Molecules/LoginFormFields",
  component: LoginFormFields,
};

interface Story {
  (args: LoginFormFieldsProps): JSX.Element;
  args?: LoginFormFieldsProps;
}

const Template: Story = (args) => <LoginFormFields {...args} />;

export const Default = Template;
Default.args = {
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
