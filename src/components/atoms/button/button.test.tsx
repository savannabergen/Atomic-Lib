import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/vitest";

describe("Button", () => {
  it("renders children", () => {
    const { getByText } = render(<Button>Hello</Button>);
    expect(getByText((content) => content.includes("Hello"))).toBeTruthy();
  });
});
