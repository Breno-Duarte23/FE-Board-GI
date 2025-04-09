import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        const emailTrimmed = email.trim();
        const senhaTrimmed = senha.trim();

        if (!emailTrimmed || !senhaTrimmed) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, emailTrimmed, senhaTrimmed);
            const user = userCredential.user;
            navigation.navigate("TelaInicial");
        } catch (error) {
            Alert.alert('Erro ao fazer login', error.message);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Image
                style={styles.imgLogin}
                source={require('../../assets/LogoGISemFundo.png')}
            />
            <View style={styles.formLogin}>
                <TextInput
                    style={styles.inputForm}
                    placeholder='E-mail'
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.inputForm}
                    placeholder='Senha'
                    secureTextEntry
                    onChangeText={setSenha}
                    value={senha}
                />
                <TouchableOpacity
                    style={styles.buttonForm}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("EsqueciMinhaSenha")}>
                    <Text style={styles.textFormPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>
                    Centro Educacional Gente Inocente 2025 ©
                </Text>
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
        flexDirection: 'column',
    },
    imgLogin: {
        width: 300,
        height: 200,
        alignSelf: 'center',
    },
    formLogin: {
        marginHorizontal: 20,
        marginVertical: 40,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        padding: 5,
    },
    inputForm: {
        height: 40,
        margin: 12,
        padding: 5,
        fontSize: 18,
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
    textFormPassword: {
        alignSelf: 'center',
        marginTop: 15,
        textDecorationLine: 'underline',
        fontSize: 18,
    },
    footerText: {
        alignSelf: 'center',
        marginTop: 15,
    },
});

export default TelaLogin;
