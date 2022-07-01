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
 
 import Photo from "../screens/Photo";
import Selected from "../screens/Selected";
 
 const screens = {
   Selected: {
     screen: Selected,
     navigationOptions: {
       title: "FAVORIS",
     },
    },
    
    Photo: {
      screen: Photo,
      navigationOptions: {
        title: "Photos",
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
 const SlectedStackNav = createStackNavigator(screens, defaultNavigationOptions);
 
 export default SlectedStackNav;
 