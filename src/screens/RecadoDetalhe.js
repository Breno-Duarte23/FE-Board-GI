import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const RecadoDetalhe = ({ route, navigation }) => {
    const { recado } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Detalhes do Recado" onBackPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.titulo}>{recado.titulo}</Text>
                <Text style={styles.dataHora}>{recado.dataHora}</Text>
                <Text style={styles.descricao}>{recado.descricao}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 24,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#49688d',
        marginBottom: 12,
    },
    dataHora: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    descricao: {
        fontSize: 16,
        color: '#333',
        lineHeight: 22,
    },
});

export default RecadoDetalhe;