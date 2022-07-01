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
import { Text, View, ScrollView, StyleSheet, Image, Alert } from "react-native";
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
import TouchableImage from '../components/TouchableImage';




const Portfolio = ({ navigation }) => {
  const favColor = navigation.getParam("favColor");
  const name = navigation.getParam("name");
  const profilImg = navigation.getParam("img");
  const desc = navigation.getParam("desc");
  const photoArray = navigation.getParam("photos");

  const selectPhoto = (photo) => {
    navigation.navigate('Photo', photo )
}



  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ backgroundColor: favColor, ...styles.profilInfos }}>
        <Image style={styles.smallprofileImg} source={{ uri: profilImg }} />
        <Text style={styles.profilName}>{name}</Text>
      </View>
      <View style={styles.profilDescription}>
        <Text style={styles.titleBioText}>Bio: </Text>
        <Text style={styles.textBio}>{desc}</Text>
      </View>
      <View>
        {photoArray.map((photo) => (
          <TouchableImage
            key={photo.id}
            imgUrl={photo.url}
            imgTitle={photo.title}
            onSelectPhoto={() => selectPhoto(photo)}
          />
        ))}
      </View>
    </ScrollView>
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
  profilInfos: {
    alignItems: "center",
    padding: 10,
  },
  smallprofileImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profilName: {
    fontFamily: "InriaSans_700Bold",
    color: Colors.white,
    fontSize: 25,
  },
  profilDescription: {
    backgroundColor: Colors.ghost,
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  titleBioText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  textBio: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 20,
    padding: 9,
  },
});
