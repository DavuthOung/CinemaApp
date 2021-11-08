import React from "react";
import {View,Button} from "react-native";
export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                title="Profile"
                onPress={() => navigation.navigate("Detail")}
            />
        </View>
    );
}