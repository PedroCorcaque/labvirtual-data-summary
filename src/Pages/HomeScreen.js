import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    Item,
    HeaderButton,
    HeaderButtons,
} from "react-navigation-header-buttons";

const styles = StyleSheet.create({
    bold: {fontWeight: "bold"},
    underline: {textDecorationLine: "underline"},
});

const Home = (props) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
            <Text style={{ color: "#009045", fontSize: 30 }}>Bem vindo ao Laboratório Virtual</Text>
            
            <Text style={{ color: "#009045", fontSize: 40 }}></Text>
            <Button
                title="Ver estatísticas"
                color="#009045"
                onPress={() => props.navigation.navigate("DataSummary")}
            />
        </View>
    );
};

const HeaderButtonComponent = (props) => (
    <HeaderButton
        IconComponent={Ionicons}
        iconSize={23}
        color="#FFF"
        {...props}
    />
);

Home.navigationOptions = (navData) => {
    return {
        headerTitle: "Laboratório Virtual",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
              <Item
                title="Setting"
                iconName="ios-information-circle-outline"
                onPress={() => navData.navigation.navigate("Info")}
              />
            </HeaderButtons>
        ),
    };
};

export default Home;