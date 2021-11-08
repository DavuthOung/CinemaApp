import React from "react";
import {createAppContainer,createBottomTab} from "./navigation";
import {HomeNavigations} from "./screens/home/navigator";
import {ProfileNavigations} from "./screens/profile/navigator";
import BaseNavigation from "./navigation/BaseNavigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as c from "react-native";
import DetailScreen from "./screens/home/screen/Detail";

const BottomTabScreen ={
    HomeTab: new HomeNavigations(),
    Profiletab: new ProfileNavigations()
};

const BottomTabNavigation = createBottomTab(BottomTabScreen,{
    screenOptions:(props) => ({
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor:"black",
        // tabBarActiveBackgroundColor:"white",
        tabBarStyle: {
            height: 80,
            borderTop: 60,
            backgroundColor: "#EBEB88",
            elevation: 0,
            borderTopWidth: 0,
            shadowOffset: {
                width: 0, 
                height: 0
            }
        },
        tabBarIcon:({color,size}) => {
            const icons = {
                HomeTab: <Icon name="home" size={size} color={color} />,
                Profiletab: <Icon name="user" size={size} color={color} />,
            };
            return icons[props.route.name];
        },
        tabBarHideOnKeyboard:true
    }),
});

class AppNavigator extends BaseNavigation {
    constructor(){
        super();
        this.screens = {
            Dashboard: {
                screen: BottomTabNavigation,
                options: {
                    headerShown:false,
                }
            },
            AuthLoading: {
                screen: SplashCreens,
                options: {
                    headerShown:false
                }
            },
            Detail: {
                screen:DetailScreen,
            },
        };
        this.StackOptions = {
            initialRouteName: "AuthLoading",
            screenOptions:{
                headerMode: "screen",
                headerTintColor: "red",
                headerStyle: { 
                    // backgroundColor: "tomato" ,
                },
                headerBackTitleVisible:false,
            }
        };
        return this.render();
    }
}

class SplashCreens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false});
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: "Dashboard" }],
            });
        }, 1000);
    }

    render() {
        return (
            <c.View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <c.ActivityIndicator animating={this.state.loading} size="small" color="red" />
            </c.View>
        );
    }
}
 
 
export default createAppContainer(new AppNavigator()) ;
 