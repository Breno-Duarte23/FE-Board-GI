import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Comunicados = () => {
    return (
        <View style={styles.mainContainer}>
            <Header title="Comunicados" />
            <Text style={styles.text}>Comunicados</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignContent: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#49688d',
    },
});

export default Comunicados;
