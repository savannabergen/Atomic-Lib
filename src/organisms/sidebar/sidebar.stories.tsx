import React from "react";
import { Meta } from "@storybook/react";
import { Sidebar } from "./Sidebar";

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
} as Meta;

export const Default = () => (
  <Sidebar
    rooms={[
      { id: 1, name: "General" },
      { id: 2, name: "Development" },
      { id: 3, name: "Design" },
    ]}
    participants={[
      { id: 1, email: "john.doe@example.com" },
      { id: 2, email: "jane.doe@example.com" },
      { id: 3, email: "bob.smith@example.com" },
    ]}
    onRoomChange={(room) => console.log("Room changed:", room)}
  />
);
