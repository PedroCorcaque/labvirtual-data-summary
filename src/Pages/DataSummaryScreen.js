import React, { useState } from "react";
import { Button, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env"

// const API_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    }
});

const formatDate = (initialDate) => {
    let strDate = initialDate.toString();
    let splitedDate = strDate.split("-");
    let reversedArrayDate = splitedDate.reverse();
    let finalDate = reversedArrayDate.join("/");

    return finalDate;
}

const DataSummary = () => {

    const [date, setDate] = useState("");
    const [markedDay, setMarketDay] = useState("");
    const [shouldShow, setShouldShow] = useState(true);

    const currentDate = new Date();
    const currentDateString = currentDate.getFullYear().toString()+"-"+(currentDate.getMonth()+1).toString()+"-"+currentDate.getDate().toString()

    return (
        <SafeAreaView style={ styles.container }>
            <View>
                {shouldShow ? (
                    <View style={ styles.container }>
                        <Calendar 
                            minDate={"2022-07-01"}
                            maxDate={ currentDateString }
                            onDayPress={day => {
                                setMarketDay(day.dateString);
                                var formatedDate = formatDate(day.dateString);
                                setDate(formatedDate);
                            }}
                            markedDates={{
                                [markedDay]: {selected: true}
                            }}
                            monthFormat={"MM/yyyy"}
                            hideExtraDays={false}
                            enableSwipeMonths={false} />

                        <Button
                            title="Ver análises"
                            color="#009045"
                            onPress={() => {
                                setShouldShow(!shouldShow);
                                
                                var data = {
                                    method: "POST",
                                    body: JSON.stringify({
                                        "id": date
                                    }),
                                    headers: {
                                        "Content-Type": "application/json",
                                        "api-key": REACT_APP_API_KEY
                                    }
                                }
                                
                                fetch(`http://10.0.0.202:5818/readings`, data)
                                    .then(response => response.json())
                                    .then(json => console.log(json))
                                    .catch(error => console.log(error));
                            }}
                        />
                    </View>
                ) : (
                    <View style={ styles.container }>
                        <Button
                            title="Voltar ao calendário"
                            color="#009045"
                            onPress={() => setShouldShow(!shouldShow)}
                        />
                    </View>
                )}      
            </View>       
        </SafeAreaView>
    );
}

DataSummary.navigationOptions = (navData) => {
    return {
        headerTitle: "Resumo dos dados",
    };
};

export default DataSummary;