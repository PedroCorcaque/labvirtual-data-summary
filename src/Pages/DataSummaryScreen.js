import React, { useState } from "react";
import { Button, StyleSheet, SafeAreaView } from "react-native";
import { CalendarList, Calendar } from "react-native-calendars";

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

    return (
        <SafeAreaView style={ styles.container }>
            <Calendar 
                minDate={"2022-07-01"}
                maxDate={"2022-11-05"}
                onDayPress={day => {
                    console.log("Selected day", day);
                    setDate(day);
                    console.log("date", date.dateString);
                    console.log("new_data", formatDate(date.dateString));
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
                title="Get analysis"
                color="#009045"
                onPress={() => console.log("Clicou aqui!")}
            />
        </SafeAreaView>
    );
}

DataSummary.navigationOptions = (navData) => {
    return {
        headerTitle: "Resumo dos dados",
    };
};

export default DataSummary;