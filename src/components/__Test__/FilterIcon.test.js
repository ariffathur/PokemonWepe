import React from "react";
import renderer from "react-test-renderer";

import FilterIcon from "../FilterIcon";

describe("<FilterIcon />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FilterIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
