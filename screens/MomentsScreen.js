import React from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import { getBackgroundImage } from "../components/images";
import Header from "../components/Header";

const MomentsScreen = ({ navigation }) => {
  const background = getBackgroundImage(2);
  return (
    <View>
      <ImageBackground source={background} style={styles.backgroundImage}>
        <Header navigation={navigation} />
        <View style={styles.educationalWebsites}>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({

  backgroundImage: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: "center",
  },

  educationalWebsites: {
    flex: 1
  },
})

export default MomentsScreen