import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import StackNav from "./HomeStackNav";
import FaqStackNav from "./FaqStackNav";
import Colors from "../style/Colors";

const RouteConfig = {
  Home: {
    screen: StackNav,
    navigationOptions: {
      drawerLabel: "Accueil",
    },
  },
  FAQ: {
    screen: FaqStackNav,
    navigationOptions: {
      drawerLabel: "Foires Aux Questions",
    },
  },
};

const DrawerNavigatorConfig = {
  hideStatusBar: true,
  drawerBackgroundColor: "#333",
  // drawerPosition: "right",
  //drawerType: "slide",
  drawerWidth: "80%",
  contentOptions: {
    labelStyle: {
      fontSize: 18,
    },
    inactiveTintColor : Colors.white,
    activeTintColor  : Colors.blueColor,

  },
};

const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);

export default createAppContainer(MainNavigator);
