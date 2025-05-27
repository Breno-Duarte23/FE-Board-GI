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
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const EsqueciMinhaSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async () => {
        if (!email.trim()) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email.trim());
            Alert.alert(
                'Sucesso!',
                'Um link para redefinir sua senha foi enviado para o seu e-mail.'
            );
            navigation.navigate('TelaLogin');
        } catch (error) {
            Alert.alert('Erro ao enviar e-mail', error.message);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
                <Image
                    style={styles.backArrow}
                    source={require('../../assets/seta-esquerda.png')}
                />
            </TouchableOpacity>

            <Image
                style={styles.imgForgotMyPassword}
                source={require('../../assets/LogoGISemFundo.png')}
            />

            <View style={styles.formLogin}>
                <Text style={styles.textForgotMyPassword}>Esqueceu sua Senha?</Text>
                <Text style={styles.textForgotMyPassword}>Digite seu e-mail</Text>
                <Text style={styles.textForgotMyPassword}>cadastrado:</Text>

                <TextInput
                    style={styles.inputForm}
                    placeholder='E-mail'
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />

                <TouchableOpacity
                    style={styles.buttonForgotMyPassword}
                    onPress={handlePasswordReset}
                >
                    <Text style={styles.buttonText}>Enviar Ticket</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
                Centro Educacional Gente Inocente 2025 ©
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    backArrow: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginHorizontal: 20,
    },
    imgForgotMyPassword: {
        width: 220,
        height: 150,
        alignSelf: 'center',
    },
    formLogin: {
        marginHorizontal: 20,
        marginVertical: 40,
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
    },
    textForgotMyPassword: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: "#49688d",
        margin: 5,
    },
    inputForm: {
        height: 40,
        margin: 20,
        padding: 5,
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#bfbfbb',
    },
    buttonForgotMyPassword: {
        backgroundColor: '#FCC911',
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: 150,
        margin: 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    footerText: {
        alignSelf: 'center',
        marginTop: 15,
    },
});

export default EsqueciMinhaSenha;