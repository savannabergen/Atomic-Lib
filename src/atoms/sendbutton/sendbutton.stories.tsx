import React from "react";
import { Meta } from "@storybook/react";
import { SendButton } from "./SendButton";

export default {
  title: "Atoms/SendButton",
  component: SendButton,
} as Meta;

export const Default = () => <SendButton onClick={() => {}} />;
export const Disabled = () => <SendButton onClick={() => {}} disabled />;
