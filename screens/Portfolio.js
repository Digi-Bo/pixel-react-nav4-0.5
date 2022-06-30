/**
 * navigation est un objet de react navigation
 * 
 * Via le destructuring, on récupère l'objet navigation
 * Dès lors, on peut accéder à navigation.getParam et récupérer  name,  country ...


/** on applique navigationOption en tant que propriété à la fonction composant portfolio 

 * Dès lors, pour pouvoir accéder à getParam et aux données, 
      nous allons avoir besoin d'un nouvel objet : navigationData    
      Là encore , c'est un objet de react navigation


----------------------------------------------------------------
Ajout du bouton info dans la barre de navigation 
  Vidéo 126  
  Doc : https://github.com/vonovak/react-navigation-header-buttons
  
*/

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../style/AppStyles";
import Colors from "../style/Colors";

import MaterialIconsHeader from "../components/MaterialIconsHeader";

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

const Portfolio = ({ navigation }) => {
  const handlePress = () => {
    navigation.replace({ routeName: "Photo" });
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.h1}>Portofolio</Text>
      <Text style={globalStyles.h2}>{navigation.getParam("name")}</Text>
      <Text style={globalStyles.h2}>{navigation.getParam("country")}</Text>
      <Text style={globalStyles.h2}>{navigation.getParam("totalImg")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("favColor")}</Text>
      <Button title="Vers Photos" onPress={handlePress} />
    </View>
  );
};

/** on applique navigationOption en tant que propriété à la fonction composant portfolio */
Portfolio.navigationOptions = (navigationData) => {
  const name = navigationData.navigation.getParam("name");
  const favColor = navigationData.navigation.getParam("favColor");

  return {
    headerTitle: `Profil de ${name}`,
    headerStyle: {
      backgroundColor: favColor,
    },
    headerTintColor: Colors.white,

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item title="info" iconName="info-outline" />
      </HeaderButtons>
    ),
  };
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
