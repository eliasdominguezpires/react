import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SuperHero } from '../interfaces/superHeroesInterfaces';

interface Props {
    detail: SuperHero;
    height?: number;
    width?: number;
}

export const Card = ({ detail, width = 250, height = 370 }: Props) => {
    
    const navigation = useNavigation();
    const uri = detail.images.md;
       
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailHeroScreen', detail)}
            activeOpacity={0.6}
            style={{ width, height, marginHorizontal: 6 }}
        >
            <View style={styles.imageContainer} >
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        position: 'relative'
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 7,
    }
});