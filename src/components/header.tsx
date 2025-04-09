import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const header = ({ title, onBackPress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onBackPress}>
                <Image style={styles.backArrow} source={require('../../assets/seta-esquerda.png')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <Image style={styles.headerImg} source={require('../../assets/LogoGISemFundo.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FCC911',
        height: 115,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    headerText: {
        color: "#49688d",
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 20,
    },
    headerImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 20,
    },
    backArrow: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginTop: 20,
    },
});

export default header;
