import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form submit", () => {
  test("name input should be rendered", () => {
    render(<Form />);
    const nameInputEl = screen.getByPlaceholderText(/employee name/i);
    expect(nameInputEl).toBeInTheDocument();
  });

  test("button should be rendered", () => {
    render(<Form />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  test("button should be disabled on load", () => {
    render(<Form />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
  });

  test("name input should change", () => {
    render(<Form />);
    const nameInputEl = screen.getByPlaceholderText(/employee name/i);
    const testValue = "Ollie";
    fireEvent.change(nameInputEl, { target: { value: testValue } });
    expect(nameInputEl.value).toBe(testValue);
  });
});
