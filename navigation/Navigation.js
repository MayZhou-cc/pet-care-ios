import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, CalendarScreen, MomentsScreen, ShopScreen, SettingScreen } from "../screens/ScreenComponents";

const Stack = createStackNavigator();
//This is the main Navigator to navigate across different features component
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Moments"
          component={MomentsScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
