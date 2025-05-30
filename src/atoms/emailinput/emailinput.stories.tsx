import React, { JSX } from "react";
import { EmailInput } from "./EmailInput";
import { EmailInputProps } from "./emailinput.types";

export default {
  title: "Atoms/EmailInput",
  component: EmailInput,
};

interface Story {
  (args: EmailInputProps): JSX.Element;
  args?: EmailInputProps;
}

const Template: Story = (args) => <EmailInput {...args} />;

export const Default = Template;
Default.args = {
  value: "",
  onChange: () => {},
  placeholder: "Email",
};
