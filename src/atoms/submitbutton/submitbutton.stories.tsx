import React, { JSX } from "react";
import { SubmitButton } from "./SubmitButton";

export default {
  title: "Atoms/SubmitButton",
  component: SubmitButton,
};

interface Story {
  (args: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element;
  args?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Template: Story = (args) => <SubmitButton {...args}>Submit</SubmitButton>;

export const Default = Template;
Default.args = {
  disabled: false,
};
