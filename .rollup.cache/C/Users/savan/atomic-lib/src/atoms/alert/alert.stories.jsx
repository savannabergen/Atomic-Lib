import React from "react";
import { Alert } from "./alert";
export default {
  title: "Atoms/Alert",
  component: Alert,
};
const Template = (args) => <Alert {...args} />;
export const Default = {
  render: Template,
  args: {
    children: "Default alert",
  },
};
export const Success = {
  render: Template,
  args: {
    children: "Success alert",
    type: "success",
  },
};
export const Dismissible = {
  render: Template,
  args: {
    children: "Dismissible alert",
    dismissible: true,
  },
};
//# sourceMappingURL=alert.stories.jsx.map
