// TODO
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Basics of testing", function () {
  test("Should contain button", () => {
    render(<Button />);
    const getItem = screen.getByTestId("btn-box");
    expect(getItem).toBeInTheDocument();
  });

  test("should have class sm", () => {
    render(<Button size="sm" />);
    const getItem = screen.getByTestId("btn-box");
    expect(getItem).toHaveClass("sm");
  });

  test("should have class primary", () => {
    render(<Button variant="primary" />);
    const getItem = screen.getByTestId("btn-box");
    expect(getItem).toHaveClass("primary");
  });

  test("should have class secondary", function () {
    render(<Button variant="secondary" />);
    const getItem = screen.getByTestId("btn-box");
    expect(getItem).toHaveClass("secondary");
  });

  //   test("should call given function", function () {
  //     const mockfn = jest.fn();
  //     render(<Button onClick={mockfn}>Click me</Button>);
  //     const btn = screen.getByText("Click me!");
  //     fireEvent.click(btn);
  //     expect(mockfn).toBeCalled();
  //   });
});
