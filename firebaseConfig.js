// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAK-uiTrbWi9vGnvl4P6jEf8LgFx4Tw-aQ",
    authDomain: "board-gente-inocente.firebaseapp.com",
    projectId: "board-gente-inocente",
    storageBucket: "board-gente-inocente.firebasestorage.app",
    messagingSenderId: "54529751751",
    appId: "1:54529751751:web:66bad88338c9b0eadc9ce2"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa a autenticação com persistência no AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
