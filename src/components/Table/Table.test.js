import { render } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  test("table should be rendered if employee data", () => {
    const { getByTestId } = render(<Table employees={true} />);
    const table = getByTestId("testTable");
    expect(table).toBeTruthy();
  });

  test("table body should not be rendered if no employee data", () => {
    render(<Table employees={[]} />);
    const tableBody = document.querySelector("tbody");
    expect(tableBody).not.toBeInTheDocument();
  });
});
