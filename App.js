import React from "react";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import * as models from "./src/models";
import AppNavigator from "./src/navigator/AppNavigator";

const loading = createLoadingPlugin();

const store = init({
  models,
  plugins: [loading],
});

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
