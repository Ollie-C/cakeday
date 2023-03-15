import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app header", () => {
  render(<App />);
  const h1Element = screen.getByText(/it's cake day/i);
  expect(h1Element).toBeInTheDocument();
});
