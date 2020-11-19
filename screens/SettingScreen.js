import React, { Component } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, Button, Card } from 'react-native-paper';

import { getBackgroundImage } from "../components/images";
import Header from '../components/Header';

export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 0,
      supperssNotification: "OFF",
    };
  }

  backgroundColorOnPress = () => {
    // Iterate over 1 to 7
    if (this.state.backgroundColor != 7) {
      this.setState((state) => {
        return { backgroundColor: state.backgroundColor + 1 };
      });
    } else {
      this.setState({ backgroundColor: 1 });
    }
  };

  //TO DO: implement Notification function.
  suppressNotificationOnPress = () => {
    if (this.state.supperssNotification == "Turn Off") {
      this.setState({
        supperssNotification: "Turn On",
      });
    } else {
      this.setState({
        supperssNotification: "Turn Off",
      });
    }
  };

  render() {
    const background = getBackgroundImage(this.state.backgroundColor);
    const imageContent = props => <Avatar.Icon {...props} icon="image" color="orange" backgroundColor="green" />
    const bellContent = props => <Avatar.Icon {...props} icon="bell" color="orange" backgroundColor="green" />
    const starContent = props => <Avatar.Icon {...props} icon="star" color="orange" backgroundColor="green" />


    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Header route={this.props} />
          <View style={styles.settingList}>
            {/* TO DO: Change this to reusable components. */}
            <Card style={styles.card}>
              <Card.Title title="Calendar Reminder" subtitle="click the button below to turn on/off" left={bellContent} />
              <Card.Actions style={{ justifyContent: "center" }}>
                <Button onPress={this.suppressNotification}>off</Button>
              </Card.Actions>
            </Card>

            <Card style={styles.card}>
              <Card.Title title="Change Background" subtitle="7 free backgound images waiting for you" left={imageContent} />
              <Card.Cover style={{ height: hp('15%') }} source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Actions style={{ justifyContent: "center" }}>
                <Button onPress={this.backgroundColorOnPress}>Change Now</Button>
              </Card.Actions>
            </Card>

            <Card style={styles.card}>
              <Card.Title title="About This App" subtitle="7 free backgound images waiting for you" left={starContent} />
              <Card.Cover style={{ height: hp('15%') }} source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Actions style={{ justifyContent: "center" }}>
                <Button >Learn more</Button>
              </Card.Actions>
            </Card>

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
    justifyContent: "flex-start",
  },

  settingList: {
    marginTop: hp('1%')
  },

  card: {
    borderRadius: 20,
    marginHorizontal: wp('8%'),
    marginVertical: hp('2%')
  },
});
