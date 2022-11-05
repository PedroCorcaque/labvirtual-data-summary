import React, { Component, useEffect, useState } from "react";
import { Text, View } from "react-native";
import app from "../Services/routes.js";

const body_request = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "api-key": process.env.API_KEY_MONGODB_LABVIRTUAL,
        "dataSource": "LabvitualData",
        "database": "DBLabvirtual",
        "collection": "Dados_Sensores"
    })
}

const DataSummary = () => {

    useEffect(async () => {    
        const fetchData = async () => {
            try {
                const response = await fetch("http://10.0.0.205:5000/sensors/08092022", body_request);
                const json = await response.json();
                console.log(json);
            } catch {
                console.log("")
            }
        };
    
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#009045", fontSize: 40 }}>
                Aqui serão amostrados os dados em forma de estatísticas resumidas!
            </Text>
        </View>
    );
}

DataSummary.navigationOptions = (navData) => {
    return {
        headerTitle: "Resumo dos dados",
    };
};

export default DataSummary;