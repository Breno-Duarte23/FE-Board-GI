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
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const handleLogin = async () => {
        const emailTrimmed = email.trim();
        const senhaTrimmed = senha.trim();

        if (!emailTrimmed || !senhaTrimmed) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, emailTrimmed, senhaTrimmed);
            navigation.navigate("TelaInicial");
        } catch (error) {
            Alert.alert('Erro ao fazer login, e-mail ou senha incorreto/a.', error.message);
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

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputForm}
                        placeholder='Senha'
                        secureTextEntry={!senhaVisivel}
                        onChangeText={setSenha}
                        value={senha}
                    />
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setSenhaVisivel(!senhaVisivel)}
                    >
                        <Image
                            source={
                                senhaVisivel
                                    ? require('../../assets/olhoFechado.png')
                                    : require('../../assets/olhoAberto.png')
                            }
                            style={styles.toggleIcon}
                        />
                    </TouchableOpacity>
                </View>

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
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
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
        borderRadius: 5,
        padding: 5,
    },
    inputForm: {
        height: 40,
        padding: 5,
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#bfbfbb',
    },
    inputWrapper: {
        position: 'relative',
        justifyContent: 'center',
        marginVertical: 12,
    },
    toggleButton: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    toggleIcon: {
        width: 24,
        height: 24,
        tintColor: '#888',
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
