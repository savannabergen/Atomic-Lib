import React, { JSX } from "react";
import { LoginFormActions } from "./LoginFormActions";
import { LoginFormActionsProps } from "./loginformactions.types";

export default {
  title: "Molecules/LoginFormActions",
  component: LoginFormActions,
};

interface Story {
  (args: LoginFormActionsProps): JSX.Element;
  args?: LoginFormActionsProps;
}

const Template: Story = (args) => <LoginFormActions {...args} />;

export const Default = Template;
Default.args = {
  children: "Submit",
  disabled: false,
};
