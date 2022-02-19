import React from "react";
import { createAppContainer,createBottomTab } from "./navigation";
import { HomeNavigations } from "./screens/home/navigator";
import { ProfileNavigations } from "./screens/profile/navigator";
import { CartNavigations } from "./screens/cart/navigator";
import { SearchNavigations } from "./screens/search/navigator";
import { WishNavigations } from "./screens/wish/navigator";
import  BaseNavigation  from "./navigation/BaseNavigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as c from "react-native";
import { Theme } from "./util";
import { hasNotch } from "react-native-device-info";

import DetailScreen from "./screens/home/screen/Detail";
import SearchScreen from "./screens/search/screen";

const BottomTabScreen ={
    HomeTab: new HomeNavigations(),
    WhishTab: new WishNavigations(),
    CartTab: new CartNavigations(),
    SearchTab: new SearchNavigations(),
    ProfileTab: new ProfileNavigations()
};
const TabBarHeight = Platform.OS === "android" ? 65 : hasNotch() ? 75 : 60;
const BottomTabNavigation = createBottomTab(BottomTabScreen,{
    screenOptions:(props) => ({
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarInactiveTintColor:Theme.colors.highlight,
        tabBarStyle: {
            height: TabBarHeight,
            borderTop: 60,
            backgroundColor: Theme.colors.secondary,
            elevation: 0,
            borderTopWidth: 0,
            shadowOffset: {
                width: 0, 
                height: 0
            }
        },
        tabBarIcon:(P) => {
            const icons = {
                ProfileTab: <UserComponent {...P} />,
                HomeTab: <HomeComponent {...P} />,
                CartTab: <CartComponent {...P} />,
                SearchTab: <SearchComponent {...P} />,
                WhishTab: <WishComponent {...P} />,
            };
            return icons[props.route.name];
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false
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
                screen: DetailScreen,
            },
            Search: {
                screen: SearchScreen,
            }
        };
        this.StackOptions = {
            initialRouteName: "AuthLoading",
            screenOptions:{
                headerMode: "screen",
                headerTintColor: Theme.colors.primary,
                headerStyle: { 
                    backgroundColor: Theme.colors.secondary ,
                },
                headerBackTitleVisible: false,
            }
        };
        return this.render();
    }
}

const tabBox = Platform.OS === "android" ? 65 : hasNotch() ? 45 : 60;
const iconSize =  Platform.OS === "android" ? 20 : 20;



function HomeComponent (props) {
    return <c.View style={[styles.tabBox,{borderTopWidth:2,borderTopColor: props.focused ? props.color : Theme.colors.secondary}]}>
        <Icon name="home" size={iconSize} color={props.color} />
    </c.View>;
}

function UserComponent (props) {
    return <c.View style={[styles.tabBox,{borderTopWidth:2,borderTopColor: props.focused ? props.color : Theme.colors.secondary}]}>
        <Icon name="user" size={iconSize} color={props.color} />
    </c.View>;
}

function WishComponent (props) {
    return <c.View style={[styles.tabBox,{borderTopWidth:2,borderTopColor: props.focused ? props.color : Theme.colors.secondary}]}>
        <Icon name="heart" size={iconSize} color={props.color} />
    </c.View>;
}

function SearchComponent (props) {
    return <c.View style={[styles.tabBox,{borderTopWidth:2,borderTopColor: props.focused ? props.color : Theme.colors.secondary}]}>
        <Icon name="search" size={iconSize} color={props.color} />
    </c.View>;
}

function CartComponent (props) {
    return <c.View style={{
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.colors.primary,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginBottom: Platform.OS === "android" ? 25 : hasNotch() ? 0 :18,
        borderWidth:2,
        borderColor: props.focused ? props.color : Theme.colors.secondary
    }}>
        <Icon name="shopping-cart" size={30} color={Theme.colors.highlight} />
    </c.View>;
}

const styles = c.StyleSheet.create({
    tabBox:{
        width: tabBox + (Platform.OS === "android" ? -10 : hasNotch() ? 20 : -10 )  ,
        height: tabBox,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1
    }
});

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
 
export default createAppContainer(new AppNavigator(),Theme) ;
 