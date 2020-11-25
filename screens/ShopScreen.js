import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { getBackgroundImage } from "../components/images";
import Header from "../components/Header";
import ShopCard from "../components/ShopCard";

//TO DO: add an "+" button, to let user add their favorite pet shop
export default class ShopScreen extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 3,
      supperssNotification: "OFF",
    };
  }

  list = ["https://www.petbarn.com.au/", "https://www.petbarn.com.au/", "https://www.petstock.com.au/"];

  render() {
    const background = getBackgroundImage(this.state.backgroundColor);

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Header route={this.props} />
          <ScrollView style={styles.settingList}>
            {/* TO DO: Add those to a list. */}
            <ShopCard
              title="Petbarn"
              url={this.list[0]}
              coversUrl="https://picsum.photos/700"
            />

            <ShopCard
              title="Pet Circle"
              url={this.list[1]}
              coversUrl="https://picsum.photos/700"
            />

            <ShopCard
              title="PETstock"
              url={this.list[2]}
              coversUrl="https://picsum.photos/700"
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: "flex-start",
  },

  settingList: {
    marginTop: hp('1%')
  }
});
