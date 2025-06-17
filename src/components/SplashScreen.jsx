import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <Image
      source={require('../../assets/LogoGISemFundo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
    <View style={styles.loadingRow}>
      <ActivityIndicator size="small" color="#fff" style={{ marginRight: 10 }} />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD600',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SplashScreen;