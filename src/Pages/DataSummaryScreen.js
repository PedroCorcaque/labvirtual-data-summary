import React, { useState } from "react";
import { Button, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

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
    const [shouldShow, setShouldShow] = useState(true);

    return (
        <SafeAreaView style={ styles.container }>
            <View>
                {shouldShow ? (
                    <View style={ styles.container }>
                        <Calendar 
                            minDate={"2022-07-01"}
                            maxDate={"2022-11-05"}
                            onDayPress={day => {
                                var formatedDate = formatDate(day.dateString);
                                setDate(formatedDate);
                            }}
                            onDayLongPress={day => {
                                console.log("Selected day", day);
                            }}
                            monthFormat={"MM/yyyy"}
                            onMonthChange={month => {
                                console.log("Month changed", month)
                            }}
                            hideArrows={true}
                            renderArrow={direction => <Arrow />}
                            hideExtraDays={true}
                            enableSwipeMonths={true} />

                        <Button
                            title="Ver análises"
                            color="#009045"
                            onPress={() => {
                                setShouldShow(!shouldShow);
                            }}
                        />
                    </View>
                ) : (
                <Text>
                    <Button
                        title="Voltar ao calendário"
                        color="#009045"
                        onPress={() => setShouldShow(!shouldShow)}
                    />
                </Text>)}      
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