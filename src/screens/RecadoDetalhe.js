import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const RecadoDetalhe = ({ route, navigation }) => {
    const { recado } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Detalhes do Recado" onBackPress={() => navigation.goBack()} />
            <View style={styles.centerContent}>
                <View style={styles.content}>
                    <Text style={styles.titulo}>{recado.titulo}</Text>
                    <Text style={styles.dataHora}>{recado.dataHora}</Text>
                    <Text style={styles.descricao}>{recado.descricao}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        padding: 24,
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#49688d',
        marginBottom: 12,
    },
    dataHora: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
    },
    descricao: {
        fontSize: 18,
        color: '#333',
        lineHeight: 22,
    },
});

export default RecadoDetalhe;