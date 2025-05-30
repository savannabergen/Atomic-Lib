import React, { JSX } from "react";
import { PasswordInput } from "./PasswordInput";
import { PasswordInputProps } from "./passwordinput.types";

export default {
  title: "Atoms/PasswordInput",
  component: PasswordInput,
};

interface Story {
  (args: PasswordInputProps): JSX.Element;
  args?: PasswordInputProps;
}

const Template: Story = (args) => <PasswordInput {...args} />;

export const Default = Template;
Default.args = {
  value: "",
  onChange: () => {},
  placeholder: "Password",
};
