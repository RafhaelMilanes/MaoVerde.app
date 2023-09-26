import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home, SplashScreen, Detaill, SearchScreen, FavoritesScreen } from '../screens';
import {theme} from '~/styles/theme';

const routeIcons = {
    Home :"home-outline",
    Search : "search-outline",
    Favorites : "heart-outline"

}

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size}) => {
            return (<Ionicons name={routeIcons[route.name]} size={size} color={color}/>)
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.greenligth,
        inactiveTintColor: theme.colors.green,
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen
          name="Detaill"
          component={Detaill}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};