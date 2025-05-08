import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, Alert } from 'react-native';
import SHA256 from 'crypto-js/sha256';

const PerfilScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [foto, setFoto] = useState('');

  // Gera o hash SHA-256 do e-mail
  const gerarFotoGravatar = (email) => {
    const emailHash = SHA256(email.trim().toLowerCase()).toString();
    return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
  };

  useEffect(() => {
    if (email) {
      const fotoUrl = gerarFotoGravatar(email);
      setFoto(fotoUrl);
    }
  }, [email]);

  const handleSaveProfile = () => {
    Alert.alert('Perfil salvo', `Nome: ${nome}\nE-mail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <Image source={{ uri: foto }} style={styles.fotoPerfil} />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Salvar" onPress={handleSaveProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default PerfilScreen;
