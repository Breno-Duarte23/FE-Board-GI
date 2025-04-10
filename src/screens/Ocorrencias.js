import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Ocorrencias = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Header title="Ocorrências" onBackPress={() => navigation.navigate('Alunos')} />
            <Text style={styles.text}>Ocorrências</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Ocorrencias;
