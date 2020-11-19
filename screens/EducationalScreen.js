import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import { getBackgroundImage } from "../components/images";
import Header from "../components/Header";

function completeTips(rewardHealth) {
  baseHealth += rewardHealth["avatarHealth"];
  baseStatus += rewardHealth["avatarStatus"];
  baseCurrency += rewardHealth["shopCurrency"];
  this.setState((state, props) => ({
    baseHealth: this.state.baseHealth + rewardHealth["avatarHealth"],
    baseCurr: this.state.baseCurr + rewardHealth["shopCurrency"],
    baseStatus: this.state.baseStatus + rewardHealth["avatarStatus"],
  }));
}

// Reading Alert to verify if the tip is read.
function reading(item) {
  Alert.alert(
    item["tipName"],
    item["tip"],
    [
      {
        text: "Cancel",
        onPress: () => console.log("cancel"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          completeTips(item["tipReward"]);
          submitTip(
            item["tipID"],
            item["tipName"],
            item["tip"],
            item["tipType"],
            item["tipReward"],
            !item["complete"]
          );
        },
      },
    ],
    { cancelable: false }
  );
}

export default class EducationalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseHealth: 0,
      baseStatus: 0,
      baseCurr: 0,
      backgroundColor: 6,
    };
  }

  handleCurrency = () => {
    return <Text style={{ fontSize: 25, color: "white" }}>{baseCurrency}</Text>;
  };

  render() {
    const background = getBackgroundImage(this.state.backgroundColor);
    return (
      <View>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Header route={this.props} />
          <View style={styles.educationalWebsites}>

          </View>
        </ImageBackground>
      </View>
    );
  }
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
