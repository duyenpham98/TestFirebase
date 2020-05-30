import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Home from './app/screens/Home'
import  Search  from './app/screens/Search'
import  ProductDetail  from './app/screens/ProDuctDetail'
import homeIcon0 from './app/media/appIcon/home0.png';
import homeIcon from './app/media/appIcon/home.png';
import search0 from './app/media/appIcon/search0.png';
import search from './app/media/appIcon/search.png';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={ProductDetail} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SearchStack() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Search" component={Search} />
      <SettingsStack.Screen name="Details" component={ProductDetail} />
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? homeIcon
              : homeIcon0;
          } else if (route.name === 'Search') {
            iconName = focused ? search : search0;
          }
          return <Image source={iconName} style={{width: 20, height: 20}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}