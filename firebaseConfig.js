import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAK-uiTrbWi9vGnvl4P6jEf8LgFx4Tw-aQ",
    authDomain: "board-gente-inocente.firebaseapp.com",
    projectId: "board-gente-inocente",
    storageBucket: "board-gente-inocente.appspot.com",
    messagingSenderId: "54529751751",
    appId: "1:54529751751:web:66bad88338c9b0eadc9ce2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let auth;

const initFirebaseAuth = () => {
    if (!auth) {
        try {
            auth = initializeAuth(app, {
                persistence: getReactNativePersistence(AsyncStorage),
            });
            console.log("Auth inicializado com persistence.");
        } catch (e) {
            console.log("Caiu no catch firebaseConfig, tentando getAuth:", e);
            try {
                auth = getAuth(app);
                console.log("Auth recuperado com getAuth.");
            } catch (e2) {
                console.log("Falha ao obter auth com getAuth:", e2);
                auth = null;
            }
        }
    }

    return auth;
};

export { app, initFirebaseAuth };