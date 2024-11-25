import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWaOFFdaWcmJt_MrR8-Y_gZFo5oXDsRGc",
    authDomain: "rutiando.firebaseapp.com",
    projectId: "rutiando",
    storageBucket: "rutiando.firebasestorage.app",
    messagingSenderId: "539433258713",
    appId: "1:539433258713:web:2d3aadf3ac0d83f83538c8",
    measurementId: "G-QQHQKZDG97"
};

// Initializa Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Inicializa servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };