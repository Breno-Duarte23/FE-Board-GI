import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';
const Comunicados = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Header title="Comunicados" onBackPress={() => navigation.navigate('TelaInicial')} />
                <Text style={styles.text}>Alunos</Text>
            </View>
            <Text style={styles.text}>Comunicados</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFFf',
        alignContent: 'center',
    },
    header: {
        backgroundColor: '#FCC911',
        height: 115,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    text: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 30
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
        marginTop: 20
    },
    backArrow: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginTop: 20
    },
});

export default Comunicados;
