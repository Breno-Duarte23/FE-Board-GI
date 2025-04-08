import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

const Aluno = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
                    <Image style={styles.backArrow} source={require('../../assets/seta-esquerda.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Alunos</Text>
                <Image style={styles.headerImg} source={require('../../assets/LogoGISemFundo.png')} />
            </View>
            <View style={styles.body}>
                <View style={styles.btnsContainer}>
                    <View >
                        <TouchableOpacity style={styles.mainBtnTouchable} onPress={() => navigation.navigate('Ocorrencias')}>
                            <Image style={styles.imgMainButton} source={require('../../assets/ocorrencias.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}>Ocorrências</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.mainBtnTouchable} onPress={() => navigation.navigate('DadosDoAluno')}>
                            <Image style={styles.imgMainButton} source={require('../../assets/dadosDoALuno.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}>Dados do aluno</Text>
                    </View>
                </View>
            </View>

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
    body: {
        flex: 1,
        padding: 15
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
    btnsContainer: {
        //backgroundColor: "red",
        padding: 30,
        height: 400,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    mainBtnTouchable: {
        width: 115,
        height: 115,
        marginTop: 35,
        borderRadius: 75,
        backgroundColor: '#3b3e90',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgMainButton: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    labelBtn: {
        marginTop: 4,
        fontSize: 18,
        color: '#49688d',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default Aluno;
