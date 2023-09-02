import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from "../Screens/Home";
import FavScreen from "../Screens/Fav";
import ProfileScreen from '../Screens/Profile';
import SearchScreen from '../Screens/Search';

const Tab = createBottomTabNavigator();

const tabs = [
    {
        name:'Home',
        component: HomeScreen,
         icon:"home",
    },
    {
        name:'Search',
        component: SearchScreen,
         icon: "search"
    },
    {
        name: 'Fav',
        component: FavScreen,
        icon:"star",
    },
    {
        name:'Profile',
        component: ProfileScreen,
         icon: "user"
    }
];

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
         {tabs.map(tab=>(
            <Tab.Screen 
                key={tab.name}
                name={tab.name}
                component={tab.component}
                options={{
                    tabBarLabel:tab.name,
                    tabBarIcon:({color,size})=>(
                        <FontAwesome name={tab.icon} color={color} size={size} />
                    ),
                }}
            />
         ))}
        </Tab.Navigator>
    );
}
