import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth/react-native';
import { initFirebaseAuth } from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../AuthContext';

const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [lembrar, setLembrar] = useState(false);
    const auth = initFirebaseAuth();
    const { login } = useAuth();

    useEffect(() => {
        const carregarCredenciais = async () => {
            try {
                const savedEmail = await AsyncStorage.getItem('email');
                const savedSenha = await AsyncStorage.getItem('senha');
                if (savedEmail && savedSenha) {
                    setEmail(savedEmail);
                    setSenha(savedSenha);
                    setLembrar(true);
                }
            } catch (error) {
                console.log('Erro ao carregar credenciais:', error);
            }
        };
        carregarCredenciais();
    }, []);

    const handleLogin = async () => {
        const emailTrimmed = email.trim();
        const senhaTrimmed = senha.trim();
        if (!emailTrimmed || !senhaTrimmed) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, emailTrimmed, senhaTrimmed);

            if (lembrar) {
                await AsyncStorage.setItem('email', emailTrimmed);
                await AsyncStorage.setItem('senha', senhaTrimmed);
            } else {
                await AsyncStorage.removeItem('email');
                await AsyncStorage.removeItem('senha');
            }

            login(emailTrimmed);

            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Erro ao fazer login', 'E-mail ou senha incorretos.');
        }
    };

    const toggleLembrar = async () => {
        setLembrar(!lembrar);
        if (lembrar) {
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('senha');
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
                    style={styles.checkboxContainer}
                    onPress={toggleLembrar}
                >
                    <View style={styles.checkbox}>
                        {lembrar && <View style={styles.checkboxChecked} />}
                    </View>
                    <Text style={styles.checkboxLabel}>Lembre de mim</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonForm}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('EsqueciMinhaSenha')}>
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: '#bfbfbb',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        width: 10,
        height: 10,
        backgroundColor: '#FCC911',
    },
    checkboxLabel: {
        color: '#888',
        fontSize: 15,
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
