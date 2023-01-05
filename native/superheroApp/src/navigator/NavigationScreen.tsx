import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

import { Movie } from '../interfaces/movieInterface';
// import { DrawerNavigator } from './DrawerNavigatorScreen';
import { DetailHeroScreen } from '../screens/DetailHeroScreen';
import { SuperHero } from '../interfaces/superHeroesInterfaces';
export type RouteStackParams = {
    DrawerNavigator: undefined,
    HomeScreen: undefined,
    DetailScreen: Movie,
    DetailHeroScreen: SuperHero
}

const Stack = createStackNavigator<RouteStackParams>();

export const NavigationScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    // backgroundColor: 'white'
                }
            }}
        >
            {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen"
                options={{ cardStyle: { backgroundColor: 'white' } }}
                component={DetailScreen}
            />
            <Stack.Screen name="DetailHeroScreen"
                options={{ cardStyle: { backgroundColor: 'white' } }}
                component={DetailHeroScreen}
            />
        </Stack.Navigator>
    );
}