import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onBackPress, navigation }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={onBackPress}
                style={styles.backButton}
                hitSlop={{ top: 60, bottom: 60, left: 60, right: 60 }}
            >
                <Image
                    style={styles.backArrow}
                    source={require('../../assets/seta-esquerda.png')}
                />
            </TouchableOpacity>

            <Text style={styles.headerText} numberOfLines={1}>{title}</Text>

            <TouchableOpacity onPress={() => navigation?.navigate('TelaInicial')}>
                <Image
                    style={styles.headerImg}
                    source={require('../../assets/LogoGISemFundo.png')}
                />
            </TouchableOpacity>
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
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: "#49688d",
        fontSize: 20,
        fontWeight: 'bold',
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
    },
    backButton: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
});

export default Header;
