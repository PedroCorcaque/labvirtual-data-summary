import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/HomeScreen";
import DataSummary from "./screens/DataSummaryScreen";
import SettingScreen from "./screens/SettingScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    DataSummary: DataSummary,
    Setting: SettingScreen,
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



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
