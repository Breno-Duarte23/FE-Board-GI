import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

const TelaInicial = ({ navigation }) => {
    const confirmarVoltar = () => {
        Alert.alert(
            "Sair da página",
            "Deseja realmente voltar para a tela de login?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => navigation.navigate('TelaLogin')
                }
            ]
        );
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Seja bem-vindo!</Text>
                <Image style={styles.headerImg} source={require('../../assets/LogoGISemFundo.png')} />
            </View>
            <View style={styles.body}>
                <TouchableOpacity onPress={confirmarVoltar}>
                    <Image style={styles.backArrow} source={require('../../assets/seta-esquerda.png')} />
                </TouchableOpacity>
                <View style={styles.btnsContainer}>
                    <View>
                        <TouchableOpacity style={styles.mainBtnTouchable}>
                            <Image style={styles.imgMainButton} source={require('../../assets/book.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}>Recados</Text>
                    </View>
                    
                    <View>
                        <TouchableOpacity style={styles.mainBtnTouchable}>
                            <Image style={styles.imgMainButton} source={require('../../assets/comunicados.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}>Comunicados</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.mainBtnTouchable}>
                            <Image style={styles.imgMainButton} source={require('../../assets/book.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}>Ocorrências</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.mainBtnTouchable}>
                            <Image style={styles.imgMainButton} source={require('../../assets/book.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}>Aluno</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.mainBtnTouchable}>
                            <Image style={styles.imgMainButton} source={require('../../assets/book.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}>Calendário</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.mainBtnTouchable}>
                            <Image style={styles.imgMainButton} source={require('../../assets/book.png')} />
                        </TouchableOpacity>
                        <Text style={styles.labelBtn} numberOfLines={1}></Text>
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
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#FCC911',
        height: 115,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    headerText: {
        color: "#49688d",
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    headerImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 20
    },
    body: {
        flex: 1,
        padding: 15
    },
    backArrow: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
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
        //marginTop: 8,
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default TelaInicial;
