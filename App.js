import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/Pages/HomeScreen";
import DataSummary from "./src/Pages/DataSummaryScreen";
import InfoScreen from "./src/Pages/InfoScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    DataSummary: DataSummary,
    Info: InfoScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#006600",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
      },
      headerTintColor: "#FFF",
    },
  },
  {
    initialRouteName: "Home",
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}
