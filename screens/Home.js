import { Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "../style/AppStyles";
import Colors from "../style/Colors";
import { DrawerActions } from 'react-navigation-drawer';
import PressableItems from "../components/PressableItems";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import {DATA} from "../data/userData"

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

const Home = ({ navigation }) => {

  const renderProfiles = ({item}) => {
    return <PressableItems 
                item={item}
                handleNavigate={() => navigation.navigate('Portfolio', item)}
           />
}

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        renderItem={renderProfiles}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

Home.navigationOptions = ({navigation} ) => {
  return { 
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="Menu"
          iconName="menu"
          // onPress={() => navigation.toggleDrawer()}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </HeaderButtons>
    ),
  }

};

export default Home;
