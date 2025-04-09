import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // Ajuste o caminho se necessário

const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then(userCredential => {
                const user = userCredential.user;
                //Alert.alert('Login realizado com sucesso!', `Bem-vindo, ${user.email}`);
                navigation.navigate("TelaInicial");
            })
            .catch(error => {
                Alert.alert('Erro ao fazer login', error.message);
            });
    };

    return (
        <View style={styles.mainContainer}>
            <Image style={styles.imgLogin} source={require('../../assets/LogoGISemFundo.png')} />
            <View style={styles.formLogin}>
                <TextInput
                    style={styles.inputForm}
                    placeholder='E-mail'
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize='none'
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputForm}
                    placeholder='Senha'
                    onChangeText={setSenha}
                    value={senha}
                />
                <TouchableOpacity style={styles.buttonForm} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenha")}>
                    <Text style={styles.textFormPassword}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', marginTop: 15 }}>Centro Educacional Gente Inocente 2025 ©</Text>
            </View>
        </View>
    );
};

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
        borderWidth: 0,
        borderBottomWidth: 2,
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
    },
    forgottMyPasswordLink:{

    },
    textForm:{
        alignSelf: 'center', 
        marginTop: 15, 
        textDecorationLine: 'underline'
    },
    textFormPassword:{
        alignSelf: 'center', 
        marginTop: 15, 
        textDecorationLine: 'underline',
        fontSize: 18,
    },
});

export default TelaLogin;
