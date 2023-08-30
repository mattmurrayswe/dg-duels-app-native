import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Principal from "../Principal";
import Explorar from "./Explorar";
import Perfil from "./Perfil";
import { background } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import Conversas from './Conversas';

const Tab = createBottomTabNavigator();

const ScreenOptions = {
    tabBarStyle: {
        backgroundColor: "#002851",
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#fff",
}

const tabs = [
    {
        name: "Explorar",
        component: Explorar,
        icon: "search"
    },
    {
        name: "Principal",
        component: Principal,
        icon: "home"
    },
    {
        name: "Conversas",
        component: Conversas,
        icon: "chatbox-ellipses-outline"
    },
    {
        name: "Perfil",
        component: Perfil,
        icon: "person"
    }
]


export default function Tabs() {
    return (
        <Tab.Navigator ScreenOptions={ScreenOptions}>
            {tabs.map((tab) => (
                <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{headerShown: false, tabBarIcon: ({color, size}) => (
                    <Ionicons name={tab.icon} size={size} color={color} />
                    )}} />
                ))
            }
        </Tab.Navigator>
    );
}

