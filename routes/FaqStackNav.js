/** Ajouter un style à la navbar
 *
 * 1.  définir defaultNavigationOptions
 * 2.  passer en argument defaultNavigationOptions  à stackNav
 *
 */

 import { Button } from "react-native";
 import React from "react";
 
 import { createStackNavigator } from "react-navigation-stack";
 import Colors from "../style/Colors";
 
 import Faq from "../screens/Faq"

 
 const screens = {
   Faq: {
     screen: Faq,
     navigationOptions: {
       title: "FAQ",
     },
   },
 };
 
 /** 1  */
 
 const defaultNavigationOptions = {
   defaultNavigationOptions: {
     headerStyle: { backgroundColor: Colors.blueColor },
     headerTintColor: Colors.white,
     headerTitleStyle: {
       fontWeight: "bold",
       textAlign: "center",
     },
   },
 };
 
 /** 2 */
 const FaqStackNav = createStackNavigator(screens, defaultNavigationOptions);
 
 export default FaqStackNav;
 