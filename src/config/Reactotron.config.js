// Reactotron.config.js
import { NativeModules } from "react-native";
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  asyncStorage,
  networking,
} from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split("://")[1].split(":")[0];
}

export default Reactotron.configure({
  name: "Warpin Pokedex",
})
  .configure({ host: scriptHostname })
  .useReactNative()
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(asyncStorage())
  .use(networking())
  // add other devtools here
  .connect();

console.tron = Reactotron;
