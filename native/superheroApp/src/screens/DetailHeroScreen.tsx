import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RouteStackParams } from '../navigator/NavigationScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;


interface Props extends StackScreenProps<RouteStackParams, 'DetailHeroScreen'> { };

export const DetailHeroScreen = (props: Props) => {

    const hero = props.route.params; // as Movie;
    const uri = hero.images.md;

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.title}>{hero.name}</Text>
                <Text style={styles.subTitle}>{hero.biography.fullName}</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name="star-outline"
                                color="grey"
                                size={16}
                            />
                            <Text> Genero: {hero.appearance.gender} </Text>
                            <Text style={{ marginLeft: 5 }}>
                                - Aliados :  {hero.biography.aliases.map(g => g).join(', ')}
                            </Text>
                        </View>
                        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                            Ocupaciones
                        </Text>
                        <Text style={{ fontSize: 16 }}>{hero.work.occupation}</Text>
                        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                            Conecciones
                        </Text>
                        <Text style={{ fontSize: 18 }}>{hero.connections.groupAffiliation}</Text>
                        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                            Apariencia
                        </Text>
                        <Text style={{ fontSize: 16 }}>Raza - {hero.appearance.race}</Text>
                        <Text style={{ fontSize: 16 }}>Altura - {hero.appearance.height.map(g => g).join(', ')}</Text>
                        <Text style={{ fontSize: 16 }}>Peso - {hero.appearance.weight.map(g => g).join(', ')}</Text>
                    </View>
            {/* Botton close */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => props.navigation.pop()}
            >
                <Icon name="arrow-back-outline"
                    color="#e4d7d7"
                    size={50}

                />
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 6,

        // overflow: 'hidden',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    image: {
        flex: 1,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        elevation: 6,
        top: 10,
        left: 10,
        opacity: 0.8,
    }
});