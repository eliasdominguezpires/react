import React from 'react';

import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';

import { DrawerItems } from 'react-navigation';

function Drawer(props) {
    return (
        <ScrollView>
            <SafeAreaView>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
        marginVertical: 5,
        marginLeft: 5,
    }
})

export default Drawer