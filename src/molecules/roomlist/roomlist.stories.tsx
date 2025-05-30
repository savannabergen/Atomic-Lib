import React from "react";
import { Meta } from "@storybook/react";
import { RoomList } from "./RoomList";

export default {
  title: "Molecules/RoomList",
  component: RoomList,
} as Meta;

export const Default = () => (
  <RoomList
    rooms={[
      { id: 1, name: "General" },
      { id: 2, name: "Development" },
      { id: 3, name: "Design" },
    ]}
  />
);
