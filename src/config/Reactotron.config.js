// Reactotron.config.js
import { NativeModules } from "react-native";
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  asyncStorage,
  networking,
} from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

export default Reactotron.configure({
  name: "Warpin Pokedex",
})
  .useReactNative()
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(asyncStorage())
  .use(networking())
  // add other devtools here
  .connect();

console.tron = Reactotron;
