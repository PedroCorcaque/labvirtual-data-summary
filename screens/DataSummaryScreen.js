import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DataSummary = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#009045", fontSize: 40 }}>
                Aqui serão amostrados os dados em forma de estatísticas resumidas!
            </Text>
            {/* <Ionicons name="ios-person-circle-outline"
                      size={80} color="#006600" /> */}
        </View>
    );
};

DataSummary.navigationOptions = (navData) => {
    return {
        // headerTitle: navData.navigation.getParam("username"),
        headerTitle: "Resumo dos dados",
    };
};

export default DataSummary;