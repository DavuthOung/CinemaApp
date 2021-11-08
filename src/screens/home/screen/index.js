import React ,{useState} from "react";
import {View,Button,TextInput} from "react-native";
import { useTheme, } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const [count, setCount] = useState("");
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor: colors.background }}>
            <Button
                title="Detail"
                onPress={() => navigation.navigate("Detail")}
            />
            <TextInput 
                style={{height:50,width:100,borderWidth:1}}
                value={count}
                onChangeText={text => setCount(text)}
            />
        </View>
    );
}