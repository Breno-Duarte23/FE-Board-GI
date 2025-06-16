import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SHA256 from 'crypto-js/sha256';
import { useAuth } from '../../AuthContext';
import Header from '../components/Header';

const PerfilScreen = () => {
  const { userEmail } = useAuth();
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
    userEmail:{
      fontSize: 18,
    }
});

export default PerfilScreen;