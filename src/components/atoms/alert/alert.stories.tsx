import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Alert from "./Alert";
import type { AlertProps } from "./alert.types";

export default {
  title: "Atoms/Alert",
  component: Alert,
} as Meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

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
