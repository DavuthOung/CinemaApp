import React from "react";
import { 
    TransitionSpecs,
    HeaderStyleInterpolators,
    TransitionPresets
} from "@react-navigation/stack";
import { creactNavigatorStack } from "./index";
import { View,Text,TouchableOpacity } from "react-native";
import {Theme} from "../util";


//Custom Header
// eslint-disable-next-line no-unused-vars
function Myheader(props) {
    return <View style={props.options.headerStyle}>
        {
            props.back && <TouchableOpacity onPress={props.navigation.goBack} style={{height:50,width:60,justifyContent:"center",alignItems: "center"}}>
                <Text>Back</Text>
            </TouchableOpacity>
        }
        <Text>{props.title}</Text>
    </View>;
}

export default class BaseNavigation {
    constructor(){
        this.DefaultScreenOptions = {
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
            },
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            ...TransitionPresets,
            // header:({ navigation, route, back,options }) => {
            //     return <Myheader title={route?.name} navigation={navigation} back={back} options={options} />;
            // },
            headerMode:"float"
        };
        this.StackOptions = {
            screenOptions:{
                headerMode: "screen",
                headerTintColor: Theme.colors.primary,
                headerStyle: { 
                    backgroundColor: Theme.colors.secondary ,
                },
                headerBackTitleVisible:false,
            }
        };
        this.screens = {};
    }

    render() {
        return creactNavigatorStack(this.screens,this.DefaultScreenOptions,this.StackOptions);
    }

}


