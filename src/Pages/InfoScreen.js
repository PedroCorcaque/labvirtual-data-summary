import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Linking } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: 20,
        marginRight: 20,
    },
    main_text: {
        color: "#009045", 
        fontSize: 30,
    },
    middle_text: {
        color: "#009045", 
        fontSize: 25,
    },
    small_text: {
        color: "#009045",
        fontSize: 20,
    },
    bold: {fontWeight: "bold"},
    underline: {textDecorationLine: "underline"},
})

const Info = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <Text style={ [styles.main_text, styles.bold, styles.underline] }>
                O projeto
            </Text>
            <Text style={ styles.middle_text }>
                O projeto busca desenvolver um sistema de sensoriamento do solo, analisando a umidade, temperatura e condutividade elétrica do mesmo.
                A aquisição dos dados fica localizada na Universidade Federal do Pampa - Campus São Gabriel, onde é utilizado dois sensores 5TE para a aquisição dos dados utilizando um Arduino Uno.
                Os dados são enviados para um banco de dados hospedado na nuvem.
            </Text>
            <Text style={ styles.small_text }>
                Os dados podem ser vistos em tempo real em {''}
                <Text style={styles.underline}
                    onPress = { () => {
                        Linking.openURL("https://labvirtual.vercel.app/");
                    }}>Laboratório Virtual</Text>
            </Text>
        </SafeAreaView>
    );
};

export default Info;