import { fireEvent, render, screen } from "@testing-library/react";
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

test("Render component with conditional rendering", () => {
  render(<App />);

  const element = screen.getByTestId("render");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Render component");
});

test("Render image when checkbox is checked", () => {
  render(<App />);
  const checkbox = screen.getByTestId("app-render-checkbox");
  fireEvent.click(checkbox);

  const img = screen.getByTestId("app-render-image");
  expect(img).toBeInTheDocument();
});

test("Render lifecycle component", () => {
  render(<App />);

  const component = screen.getByTestId("app-lifecycle");

  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent(
    "Hello from Lifecycle component"
  );
  
});

test("Render lifecycle old component", () => {
  render(<App />);

  const component = screen.getByTestId("app-lifecycleold");

  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent(
    "Hello from Old Life Cycle"
  );
  
});
