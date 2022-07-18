import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Basics of testing", function () {
  test("Should contain Avatar Tag", function () {
    render(<Avatar />);
    const getItem = screen.getByTestId("avatar-cont");
    expect(getItem).toBeInTheDocument();
  });

  test("Should have same name", function () {
    render(<Avatar name="Anand Kulkarni" />);
    const getItem = screen.getByTestId("avatar-cont");
    expect(getItem).toHaveClass("Anand Kulkarni");
  });

  //   test("Should have some width", function () {
  //     render(<Avatar hasSrc={`https://bit.ly/sage-adebayo`} />);
  //     const getItem = screen.getByTestId("avatar-cont");
  //     expect(getItem).toHaveClass("width:500px");
  //   });

  test("Should have same size", function () {
    render(<Avatar size="xs" />);
    const getItem = screen.getByTestId("avatar-cont");
    expect(getItem).toHaveClass("xs");
  });
});
