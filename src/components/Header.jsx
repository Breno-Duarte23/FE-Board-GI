import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onBackPress, navigation }) => {
    return (
        <View style={styles.header}>
            {onBackPress ? (
                <TouchableOpacity
                    onPress={onBackPress}
                    style={styles.sideButton}
                    hitSlop={{ top: 60, bottom: 60, left: 60, right: 60 }}
                >
                    <Image
                        style={styles.backArrow}
                        source={require('../../assets/seta-esquerda.png')}
                    />
                </TouchableOpacity>
            ) : (
                <View style={styles.sideButton} />
            )}

            <View style={styles.titleContainer}>
                <Text style={styles.headerText} numberOfLines={1}>{title}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation?.navigate('Home')} style={styles.sideButton}>
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
    sideButton: {
        width: 50,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    headerText: {
        color: "#49688d",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    headerImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 15,
    },
    backArrow: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginTop: 25,
    },
});

export default Header;