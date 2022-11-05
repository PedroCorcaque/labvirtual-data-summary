import React, { useState } from "react";
import { Text, View, TextInput, Button, Linking, StyleSheet, SafeAreaView } from "react-native";
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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "#009045", fontSize: 60 }}></Text>
            <Text style={{ color: "#009045", fontSize: 30 }}>Bem vindo ao Laboratório Virtual</Text>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={ [{ color: "#009045", fontSize: 25 }, styles.underline, styles.bold] }>O Projeto</Text>
                <Text style={{ color: "#009045", fontSize: 20 }}>
                    O projeto busca desenvolver um sistema de sensoriamento do solo, analisando a umidade, temperatura e condutividade elétrica do mesmo.
                    A aquisição dos dados fica localizada na Universidade Federal do Pampa - Campus São Gabriel, onde é utilizado dois sensores 5TE para a aquisição dos dados utilizando um Arduino Uno.
                    Os dados são enviados para um banco de dados hospedado na nuvem.
                </Text>
            </View>
            <Text style={{ color: "#009045", fontSize: 15 }}>
                Os dados podem ser vistos em tempo real em {''}
                <Text style={styles.underline}
                      onPress = { () => {
                        Linking.openURL("https://labvirtual.vercel.app/");
                      }}>Laboratório Virtual</Text>
            </Text>
            {/* <Ionicons name="ios-home" size={80} color="#009045" /> */}
            {/* <TextInput
                placeholder="Enter your name"
                value={input}
                onChangeText={(value) => setInput(value)}
            /> */}
            <Text style={{ color: "#009045", fontSize: 40 }}></Text>
            <Button
                title="Ver estatísticas"
                color="#009045"
                onPress={() => props.navigation.navigate("DataSummary")}
            />
            <Text style={{ color: "#009045", fontSize: 60 }}></Text>
            <Text style={{ color: "#009045", fontSize: 60 }}></Text>
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
                iconName="ios-settings-outline"
                onPress={() => navData.navigation.navigate("Setting")}
              />
            </HeaderButtons>
        ),
    };
};

export default Home;