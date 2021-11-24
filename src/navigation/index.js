import React from "react";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { 
    createStackNavigator
} from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function creactNavigatorStack (Screen={},optionsScreen= {},stackOptions={}) {
    const Screens = [];
    for (const [name, value] of Object.entries(Screen)) {
        Screens.push({ 
            name: name, 
            component: "screen" in value ? value?.screen : value,
            options: "options" in value ? {...optionsScreen,...value?.options} : {...optionsScreen}
        });
    }
    return class extends React.Component {
        render() {
            return <Stack.Navigator {...stackOptions}>
                {
                    Screens.map((item,key) => (
                        <Stack.Screen
                            key={key} 
                            name={item.name} 
                            component={item.component} 
                            options={item.options} 
                        />
                    ))
                }
            </Stack.Navigator>;
        }
    };
}

function createBottomTab(Screen=[],TabOptions={}) {
    const Screens = [];
    for (const [name, value] of Object.entries(Screen)) {
        Screens.push({ name, component:value});
    }
    return class extends React.Component {
        render() {
            return <Tab.Navigator {...TabOptions}>
                {
                    Screens.map((item,key) => (
                        <Tab.Screen 
                            key={key}
                            name={item.name} 
                            component={item.component} 
                            options ={{headerShown:false}} 
                        />
                    ))
                }
            </Tab.Navigator>;
        }
    };
}

function createAppContainer(
    AppContainer,
    Theme={
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
        },
    }
) {
    return class extends React.Component {
        render() {
            return <NavigationContainer theme={Theme}>
                <AppContainer />
            </NavigationContainer>;
        }
    };
}

export {
    creactNavigatorStack,
    createAppContainer,
    createBottomTab
};