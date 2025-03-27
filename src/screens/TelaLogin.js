import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const TelaLogin = () => {
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.imgLogin} source={require('../../assets/Logo Gente Inocente.png')} />
            <View style={styles.formLogin}>
                <TextInput style={styles.inputForm} placeholder='Usuário ' />
                <TextInput secureTextEntry={true} style={styles.inputForm} placeholder='Senha' />
                <TouchableOpacity style={styles.buttonForm}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', marginTop: 15 }}>Esqueci minha senha</Text>
                <Text style={{ alignSelf: 'center', marginTop: 15 }}>Centro Educacional Gente Inocente 2025 ©</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFFf',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    },
    imgLogin: {
        width: 300,
        height: 200,
        alignSelf: 'center'
    },
    formLogin: {
        marginHorizontal: 20,
        marginVertical: 40,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        padding: 5
    },
    inputForm: {
        height: 40,
        margin: 12,
        padding: 5,
        fontSize: 18,
        borderWidth: 0, // Remove todas as bordas
        borderBottomWidth: 2, // Mantém apenas a borda inferior
        borderBottomColor: '#bfbfbb',
    },
    buttonForm: {
        backgroundColor: '#FCC911',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: 150,
        marginTop: 15,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default TelaLogin;
