import React from "react";
import renderer from "react-test-renderer";

import PokemonCard from "../PokemonCard";

describe("<PokemonCard />", () => {
  const item = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  };
  it("has 2 child", () => {
    const tree = renderer.create(<PokemonCard item={item} />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<PokemonCard item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
