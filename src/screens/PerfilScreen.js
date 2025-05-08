import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, Alert } from 'react-native';
import md5 from 'md5';  // Biblioteca para gerar o hash MD5 do e-mail.

const PerfilScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [foto, setFoto] = useState('');

  // Função para gerar o URL do Gravatar
  const gerarFotoGravatar = (email) => {
    const emailHash = md5(email.trim().toLowerCase()); // Garante que o email seja minúsculo e sem espaços
    return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`; // URL padrão do Gravatar
  };

  useEffect(() => {
    // Caso já tenha um e-mail, geramos a foto automaticamente ao carregar a tela.
    if (email) {
      const fotoUrl = gerarFotoGravatar(email);
      setFoto(fotoUrl);
    }
  }, [email]);  // Atualiza sempre que o e-mail mudar

  const handleSaveProfile = () => {
    Alert.alert('Perfil salvo', `Nome: ${nome}\nE-mail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      {/* Exibindo a foto do usuário */}
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
