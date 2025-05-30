import React from "react";
import { Meta } from "@storybook/react";
import { RoomItem } from "./RoomItem";

export default {
  title: "Atoms/RoomItem",
  component: RoomItem,
} as Meta;

export const Default = () => <RoomItem room={{ id: 1, name: "General" }} />;

export const WithOnClick = () => (
  <RoomItem
    room={{ id: 1, name: "General" }}
    onClick={() => console.log("Room item clicked")}
  />
);
