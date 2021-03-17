import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render two types of component", () => {
  render(<App />);

  const classComponentItem = screen.getByTestId("header-class");
  const functionalComponentItem = screen.getByTestId("header-func");
  expect(classComponentItem).toBeInTheDocument();
  expect(classComponentItem).toHaveTextContent(
    "Hello from Header as a Class Component"
  );
  expect(functionalComponentItem).toBeInTheDocument();
  expect(functionalComponentItem).toHaveTextContent(
    "Hello from Header as a Function Component"
  );
});
