import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Recados = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Header title="Recados" onBackPress={() => navigation.navigate('TelaInicial')} />
            <Text style={styles.text}>Recados</Text>
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

export default Recados;
