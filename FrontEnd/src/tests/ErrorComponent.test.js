import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ErrorComponent from "../components/ErrorComponent";

describe("ErrorComponent testing", () => {
  const msg = "Network error";
  it("renders TicketItem component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ErrorComponent message={msg} />, div);
  });

  it("renders TicketItem with proper label", () => {
    const { getByTestId } = render(<ErrorComponent message={msg} />);
    expect(getByTestId("errorComponent")).toHaveTextContent(
      "Oops, there is an error : Network error"
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(<ErrorComponent message={msg} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
