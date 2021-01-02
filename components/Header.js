import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

// This is the main header across all screens
const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <FontAwesome
        style={styles.iconStyle}
        name="home"
        onPress={() => navigation.navigate("Home")} />
      <MaterialIcons
        style={styles.iconStyle}
        name="settings"
        onPress={() => navigation.navigate("Settings")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp('8%')
  },

  iconStyle: {
    fontSize: RFValue(30),
    color: "#CC5803",
    marginHorizontal: wp('8%'),
  },
});
