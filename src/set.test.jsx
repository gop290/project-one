import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Greeting from "./Greeting";

test("shows greeting", () => {
  render(<Greeting />);

  expect(screen.getByText("Hello Abdul")).toBeInTheDocument();
});
