import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAK-uiTrbWi9vGnvl4P6jEf8LgFx4Tw-aQ",
    authDomain: "board-gente-inocente.firebaseapp.com",
    projectId: "board-gente-inocente",
    storageBucket: "board-gente-inocente.appspot.com",
    messagingSenderId: "54529751751",
    appId: "1:54529751751:web:66bad88338c9b0eadc9ce2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
