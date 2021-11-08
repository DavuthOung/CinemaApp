import React from "react";
import {View,Button} from "react-native";
import { useTheme, } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor: colors.background }}>
            <Button
                title="Detail"
                onPress={() => navigation.navigate("Detail")}
            />
        </View>
    );
}