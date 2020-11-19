import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { Agenda } from 'react-native-calendars';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Text, Avatar } from 'react-native-paper';

import Header from "../components/Header";

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageBackground
          source={require("../assets/BackgroundWall.jpg")}
          style={styles.backgroundImage}
        >
          <Header route={this.props} />
          <View style={styles.calendar}>
            <Agenda
              items={this.state.items}
              loadItemsForMonth={this.loadItems}
              selected={'2020-11-19'}
              renderItem={this.renderItem}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }


  loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10 }, { marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View style={styles.cardView}>
              <Text>{item.name}</Text>
              <Avatar.Text label="CY" size={hp("4%")} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  }

  timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

}

const styles = StyleSheet.create({
  backgroundImage: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: "center",
  },

  MainContainer: {
    flex: 1,
    flexDirection: "column",
  },

  calendar: {
    flex: 1,
    marginVertical: hp("3%")
  },

  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'white',
  }

});
