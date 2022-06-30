import react from "react";

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../style/Colors";

const MaterialIconsHeader = (props) => {
  return (
    <HeaderButton
      IconComponent={MaterialIcons}
      iconSize={30}
      color={Colors.white}
      {...props}
    />
  );
};

export default MaterialIconsHeader;
