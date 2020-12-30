import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCABItYvAMXX4sYiwSw4Q95CCnYFx4jKgg",
  authDomain: "tiktok-8e762.firebaseapp.com",
  projectId: "tiktok-8e762",
  storageBucket: "tiktok-8e762.appspot.com",
  messagingSenderId: "550812149433",
  appId: "1:550812149433:web:99a02fed9754ce0a9edd68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

/*Dopoe aver fatto un npm i firebase la linea 10 12 per creare un db su firebase. Subito dopo sposcari sulla piattaforma e creare cliccando CLOUD FIRESTONE seguendo le istruzioni creiamo il nostro reale db*/
