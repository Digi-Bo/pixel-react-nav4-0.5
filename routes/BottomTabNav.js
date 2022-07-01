import React from 'react';
import { createBottomTabNavigator } from "react-navigation-tabs";
import StackNav from "./HomeStackNav";
import SlectedStackNav from "./SelctedStackNav";
import Colors from "../style/Colors";
import { MaterialIcons } from '@expo/vector-icons';

const RouteConfigs = {
  Home: {
    screen: StackNav,
    navigationOptions: {
        tabBarIcon: (tabInfo) =>  <MaterialIcons name="home" size={24} color={tabInfo.tintColor} />,
        tabBarLabel : 'Accueil'

    }
},
Likes: {
    screen: SlectedStackNav,
    navigationOptions: {
        tabBarIcon: ({tintColor}) =>  <MaterialIcons name="thumb-up" size={24} color={tintColor} />,
        tabBarLabel : 'Sélection'

    }
},
};


const TabNavigatorConfig = {
    tabBarOptions : {
        inactiveTintColor : Colors.greyColor, 
        activeTintColor  : Colors.blueColor,
    }
}


const BottomTabNav = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default BottomTabNav;
