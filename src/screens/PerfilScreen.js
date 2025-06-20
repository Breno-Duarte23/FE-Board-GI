import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SHA256 from 'crypto-js/sha256';
import { useAuth } from '../../AuthContext';
import Header from '../components/Header';

const PerfilScreen = ({ navigation }) => {
  const { userEmail, logout } = useAuth();
  const [foto, setFoto] = useState('');

  const gerarFotoGravatar = (email) => {
    const emailHash = SHA256(email.trim().toLowerCase()).toString();
    return `https://www.gravatar.com/avatar/${emailHash}?d=identicon&s=400`;
  };

  useEffect(() => {
    if (userEmail) {
      const fotoUrl = gerarFotoGravatar(userEmail);
      setFoto(fotoUrl);
    } else {
      setFoto('../../assets/avatar-default.png');
    }
  }, [userEmail]);

  const confirmarLogout = () => {
    Alert.alert(
      'Sair',
      'Deseja realmente sair do aplicativo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            logout();
            navigation.replace('TelaLogin');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Perfil do Usuário" />
      <View style={styles.content}>
        <Image
          source={{ uri: foto }}
          style={styles.fotoPerfil}
          defaultSource={require('../../assets/avatar-default.png')}
        />
        <Text style={styles.emailText}>{userEmail}</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={confirmarLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }, 
    fotoPerfil: {
        width: 220,
        height: 220,
        borderRadius: 60,
        marginBottom: 20,
        backgroundColor: '#ccc',
    },
    emailText: {
      fontSize: 18,
      marginBottom: 24,
    },
    logoutBtn: {
      marginTop: 24,
      backgroundColor: '#FCC911',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
    },
    logoutText: {
      color: '#49688d',
      fontSize: 18,
      fontWeight: 'bold',
    },
});

export default PerfilScreen;