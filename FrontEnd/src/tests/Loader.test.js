import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

import Loader from "../components/Loader";

describe("LoaderComponent testing", () => {
  it("renders LoaderComponent component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader />, div);
  });
  it("renders LoaderComponent with proper label", () => {
    const { queryByLabelText } = render(<Loader />);
    expect(queryByLabelText).toBeTruthy();
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
