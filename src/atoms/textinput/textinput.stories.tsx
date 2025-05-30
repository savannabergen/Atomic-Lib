import React from "react";
import { Meta } from "@storybook/react";
import { TextInput } from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as Meta;

export const Default = () => (
  <TextInput placeholder="Type a message..." value="" onChange={() => {}} />
);

export const WithValue = () => (
  <TextInput
    placeholder="Type a message..."
    value="Hello"
    onChange={() => {}}
  />
);

export const Disabled = () => (
  <TextInput
    placeholder="Type a message..."
    value=""
    onChange={() => {}}
    disabled
  />
);
