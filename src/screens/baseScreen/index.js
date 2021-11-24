import React from "react";
import {Theme} from "../../util";
import {View,StatusBar} from "react-native";

export default class BaseScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.Theme =  Theme;

    }

    content () {

    }

    render() {
        return <View style={{flex: 1}}>
            <StatusBar animated={true} backgroundColor={Theme.colors.secondary} />
            {this.content()}
        </View>;
    }


}