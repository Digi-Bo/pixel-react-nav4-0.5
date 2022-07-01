import { Text, View, Pressable, Image } from "react-native";
import React from "react";

import {globalStyles}  from "../style/AppStyles"
import Colors from "../style/Colors"


const PressableItems = ({item, handleNavigate}) => {
  return (
    <Pressable
      onPress={ handleNavigate}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.clicked : Colors.white },
        globalStyles.itemContainer,
      ]}
    >
      <Text style={globalStyles.h1}>{item.name}</Text>
      <Image source={{ uri: item.img }} style={globalStyles.profileImg} />

      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.h2}>{item.country}</Text>
        <Text style={globalStyles.infos}>{item.photos.length}</Text>
      </View>
    </Pressable>
  );
};

export default PressableItems;
