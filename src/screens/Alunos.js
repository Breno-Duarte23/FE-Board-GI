import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const Alunos = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Header title="Alunos" onBackPress={() => navigation.navigate('TelaInicial')} navigation={navigation} />

            <View style={styles.body}>
                <View style={styles.btnsContainer}>
                    <MenuButton
                        label="Ocorrências"
                        imageSource={require('../../assets/ocorrencias.png')}
                        onPress={() => navigation.navigate('Ocorrencias')}
                    />
                    <MenuButton
                        label="Dados do aluno"
                        imageSource={require('../../assets/dadosDoALuno.png')}
                        onPress={() => navigation.navigate('DadosDoAluno')}
                    />
                </View>
            </View>
        </View>
    );
};

const MenuButton = ({ label, imageSource, onPress }) => (
    <View style={styles.menuItem}>
        <TouchableOpacity style={styles.mainBtnTouchable} onPress={onPress}>
            <Image style={styles.imgMainButton} source={imageSource} />
        </TouchableOpacity>
        <Text style={styles.labelBtn} numberOfLines={1}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignContent: 'center',
    },
    body: {
        flex: 1,
        padding: 15,
    },
    btnsContainer: {
        padding: 30,
        height: 400,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    menuItem: {
        alignItems: 'center',
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

export default Alunos;
