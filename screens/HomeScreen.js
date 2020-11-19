import React, { Component } from "react";
import { StyleSheet, ImageBackground, Text, Image, View, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import { ProgressBar, Colors } from "react-native-paper";
import { images, getBackgroundImage } from "../components/images";
import Header from "../components/Header";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarCharacter: 0,
      avatarStatus: 100, //should be changed based on data in the database 
      avatarHealth: 100, //should be changed based on data in the database 
      backgroundColor: 1,
      avatarCurrency: 0,
    };
  }

  //base on the pet status, the image of pet will change.
  handleAvatarHealthChange = (props) => {
    const avatarHealth = props.health;
    const avatarCharacter = this.state.avatarCharacter;
    if (avatarCharacter === 1) {
      return <Image style={styles.avatar} source={images.character1} />;
    } else if (avatarCharacter === 2) {
      return <Image style={styles.avatar} source={images.character2} />;
    } else if (avatarCharacter === 3) {
      return <Image style={styles.avatar} source={images.character3} />;
    } else {
      if (avatarHealth > 80) {
        return (
          <Image
            style={styles.avatar}
            source={require("../assets/avatar/avatar_1.png")}
          />
        );
      } else if (avatarHealth > 60 && avatarHealth <= 80) {
        return (
          <Image
            style={styles.avatar}
            source={require("../assets/avatar/avatar_2.png")}
          />
        );
      } else if (avatarHealth > 40 && avatarHealth <= 60) {
        return (
          <Image
            style={styles.avatar}
            source={require("../assets/avatar/avatar_3.png")}
          />
        );
      } else {
        return (
          <Image
            style={styles.avatar}
            source={require("../assets/avatar/avatar_4.png")}
          />
        );
      }
    }
  };

  render() {
    const background = getBackgroundImage(this.state.backgroundColor);
    return (
      <View style={styles.container}>

        <ImageBackground source={background} style={styles.backgroundImage}>
          <Header route={this.props} />
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarDialogue}> Another Day to be with you. </Text>
            <this.handleAvatarHealthChange
              health={this.state.avatarHealth}
            />
            <View>
              {/* TO DO: Change this to one reusable component and implement functionality*/}
              <View>
                <Text style={styles.statusName}> Happiness Status </Text>
                <ProgressBar
                  progress={1 * this.state.avatarStatus * 0.01}
                  color={Colors.lightBlue300}
                  style={{
                    height: hp('1.5%'),
                    width: wp('60%'),
                    //radius: 100
                  }}
                />
              </View>
              <View>
                <Text style={styles.statusName}> Emotion Status </Text>
                <ProgressBar
                  progress={1 * this.state.avatarHealth * 0.01}
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
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => this.props.navigation.navigate("Calendar")}
            >
              <Text style={styles.customBtnText}>Calendar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() =>
                this.props.navigation.navigate("Educational")
              }
            >
              <Text style={styles.customBtnText}>Learn Your Pet</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => this.props.navigation.navigate("Shop")}
            >
              <Text style={styles.customBtnText}>Shop</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
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
