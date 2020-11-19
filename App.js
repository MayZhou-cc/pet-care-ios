import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MainNavigator from "./navigation/Navigation";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const windowWidth = Dimensions.get('window').width;
const windowHight = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <MainNavigator />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHight,
    justifyContent: 'center',
  },
  wrapper: {
    height: hp('100%'),
    width: wp('100%'),
  }
});
