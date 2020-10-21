import React from "react";
import renderer from "react-test-renderer";

import EmptyState from "../EmptyState";

describe("<EmptyState />", () => {
  it("has 2 child", () => {
    const tree = renderer.create(<EmptyState />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<EmptyState />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
