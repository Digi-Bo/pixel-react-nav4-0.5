import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import StackNav from "./HomeStackNav";

import Faq from "../screens/Faq";

const RouteConfig = {
  Home: {
    screen: StackNav,
  },
  FAQ: {
    screen: Faq,
  },
};

const MainNavigator = createDrawerNavigator(RouteConfig);

export default createAppContainer(MainNavigator);
