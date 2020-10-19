import React from "react";
import { RecoilRoot } from "recoil";

import AppNavigator from "./src/navigator/AppNavigator";

export default function App() {
  return (
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  );
}
