import React from "react";
import {View,Button} from "react-native";
export default function DetailScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}