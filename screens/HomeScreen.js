import React, { Component, useState } from "react";
import { StyleSheet, ImageBackground, Text, Image, View, TouchableOpacity } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import { getBackgroundImage } from "../components/images";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const [avatarStatus, setAvatarStatus] = useState(100)
  const [avatarHealth, setAvatarHealth] = useState(100)
  const [backgroundColor, setBackgroundColor] = useState(1)

  const background = getBackgroundImage(backgroundColor);

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.backgroundImage}>
        <Header navigation={navigation} />
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarDialogue}> Another Day to be with you. </Text>
          <Image style={styles.avatar} source={require("../assets/avatar/niangao.png")} />
          <View>
            {/* TO DO: Change this to one reusable component and implement functionality*/}
            <View>
              <Text style={styles.statusName}> Happiness Status </Text>
              <ProgressBar
                progress={1 * avatarStatus * 0.01}
                color={Colors.lightBlue300}
                style={{
                  height: hp('1.5%'),
                  width: wp('60%'),
                }}
              />
            </View>
            <View>
              <Text style={styles.statusName}> Emotion Status </Text>
              <ProgressBar
                progress={1 * avatarHealth * 0.01}
                color={Colors.green300}
                style={{
                  height: hp('1.5%'),
                  width: wp('60%'),
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customBtnBG} onPress={() => navigation.navigate("Calendar")}>
            <Text style={styles.customBtnText}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customBtnBG}
            onPress={() =>
              navigation.navigate("Auth")
            }
          >
            <Text style={styles.customBtnText}>Pets Moments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customBtnBG} onPress={() => navigation.navigate("Shop")}>
            <Text style={styles.customBtnText}>Shop</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    flexDirection: "column",
  },

  backgroundImage: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: "center",
  },

  avatarContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  //TO DO: Change font style.
  avatarDialogue: {
    color: "#990000",
    width: wp('70%'),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: RFValue(20),
    fontWeight: "400",
  },

  avatar: {
    height: wp('65%'),
    width: wp('65%'),
    margin: wp('10%'),
  },

  buttonContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
  },

  customBtnText: {
    fontSize: RFValue(15),
    fontWeight: "500",
    color: "#E2711D",
    textAlign: "center",
    padding: 3
  },

  customBtnBG: {
    backgroundColor: "white",
    borderRadius: 100,
    margin: hp('0.5%'),
    width: wp('45%'),
    flexDirection: "column",
  },

  statusName: {
    fontSize: RFValue(15),
    textAlign: "center",
    fontWeight: "500",
    color: "#E2711D",
    padding: hp('1%')
  },
});
