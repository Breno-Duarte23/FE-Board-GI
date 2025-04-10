import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const DadosDoAluno = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                title="Dados do Aluno"
                onBackPress={() => navigation.navigate('Alunos')}
            />
            <Text style={styles.text}>Dados do Aluno</Text>
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

export default DadosDoAluno;
