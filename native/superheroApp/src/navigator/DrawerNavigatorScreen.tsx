import React from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    const { width, height } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerType={
                width >= 758 ? 'permanent' : 'front'
            } 
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    )
}