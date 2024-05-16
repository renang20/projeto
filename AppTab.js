import React from "react";  
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppList from "./AppList";
import AppForm from "./AppForm";

const {Navigator, Screen} = createBottomTabNavigator()

function AppTab(){
    return(
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#32264d",
                    tabBarInactiveTintColor: "#c1bcc",
                    tabBarBackgroundColor: "ebebf5",
                    tabbarInactiveBackgroundColor: "fafafc",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        botton: 0,
                        left: 0,
                        right: 0
                    },
                    tabBarIconStyle: {display: "none"}
                }}
            >
                <Screen name = "Applist" component={AppList}/>
                <Screen name = "AppForm" component={AppForm}/>
            </Navigator>
        </NavigationContainer>
    )
}
export default AppTab;