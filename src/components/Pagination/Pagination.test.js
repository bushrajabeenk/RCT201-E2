import { render, screen } from "@testing-library/react";
import { Pagination } from "../components/Pagination";

describe("Basics of testing", function () {
  test("Should contain Input Tag and button", function () {
    render(<Pagination />);
    const getItem = screen.getByTestId("page-cont");
    expect(getItem).toBeInTheDocument();
  });

  test("Should have 10 boxes", function () {
    render(<Pagination count={10} />);
    const getItem = screen.getAllByTestId("items");
    expect(getItem).toHaveLength(10);
  });

  test("should work on next button", function () {
    render(<Pagination />);
    let items = screen.getByTestId("items");
    expect(items).toHaveTextContent(0);

    let next = screen.getByTestId("next");
    fireEvent.click(next);
    expect(items).toHaveTextContent(1);
  });

  test("should work on prev button", function () {
    render(<Pagination />);
    let items = screen.getByTestId("items");
    expect(items).toHaveTextContent(0);

    let next = screen.getByTestId("next");
    fireEvent.click(next);
    expect(items).toHaveTextContent(1);

    let prev = screen.getByTestId("prev");
    fireEvent.click(prev);
    expect(items).toHaveTextContent(0);
  });
});
