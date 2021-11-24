import React from "react";
import { 
    View,
    Text,
    Platform,
    StyleSheet,
    Pressable 
} from "react-native";
import {Theme} from "../../../util";
import BaseScreen from "../../baseScreen";
import { hasNotch } from "react-native-device-info";
export default class HomeScreen extends BaseScreen {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch:"",
        };
    }

    content () {
        return <View style={{ flex: 1 }}>
            <View style={styles.headerBar}>
                <Pressable style={styles.searchBox} onPress={() => this.props.navigation.navigate("Search")}>
                    <Text>Search</Text>
                </Pressable>
            </View>
            <View style={{flexGrow: 1}}>
                
            </View>
        </View>;
    }
   
}

const styles = StyleSheet.create({
    headerBar: {
        height: Platform.OS === "android" ? 60 : hasNotch() ? 90 : 60,
        justifyContent: Platform.OS === "android" ? "center" : "flex-end",
        backgroundColor: Theme.colors.secondary
    },
    searchBox: {
        height: 40,
        backgroundColor: Theme.colors.primary,
        borderRadius: 25,
        paddingHorizontal: 10,
        margin: 10,
        color: Theme.colors.text,
        justifyContent: "center"
    }
});