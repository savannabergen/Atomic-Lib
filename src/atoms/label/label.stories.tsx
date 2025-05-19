import { Meta, StoryFn } from "@storybook/react";
import { Label } from "./Label";
import { LabelProps } from "./label.types";

export default {
  title: "Atoms/Label",
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = {
  render: Template,
  args: {
    children: "Default label",
  },
};

export const Required = {
  render: Template,
  args: {
    children: "Required label",
    required: true,
  },
};

export const Error = {
  render: Template,
  args: {
    children: "Error label",
    error: true,
  },
};

export const Disabled = {
  render: Template,
  args: {
    children: "Disabled label",
    disabled: true,
  },
};
