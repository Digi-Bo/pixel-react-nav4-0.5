import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MaterialIconsHeader from "../components/MaterialIconsHeader";
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from "react-navigation-header-buttons";

const Faq = () => {
  return (
    <View>
      <Text>Faq</Text>
    </View>
  );
};


Faq.navigationOptions = ({navigation} ) => {
    return { 
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    }
  
  };


export default Faq;
