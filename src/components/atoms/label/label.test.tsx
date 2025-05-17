import { render, screen } from "@testing-library/react";
import Label from "./label";
import "@testing-library/jest-dom/vitest";

describe("Label component", () => {
  it("renders children", () => {
    render(<Label>Test label</Label>);
    expect(screen.getByText("Test label")).toBeInTheDocument();
  });

  it("renders required asterisk", () => {
    render(<Label required>Test label</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Label className="test-class">Test label</Label>);
    expect(screen.getByText("Test label")).toHaveClass("test-class");
  });

  it("applies error class", () => {
    render(<Label error>Test label</Label>);
    expect(screen.getByText("Test label")).toHaveClass("label-error");
  });

  it("applies disabled class", () => {
    render(<Label disabled>Test label</Label>);
    expect(screen.getByText("Test label")).toHaveClass("label-disabled");
  });
});
