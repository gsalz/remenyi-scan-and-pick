
// Firebase inicializálás
const firebaseConfig = {
  apiKey: "AIzaSyBqXYdVxxRfVUrwDsI2VlHQvpdhqr-oe9g",
  authDomain: "remenyikeresztur.firebaseapp.com",
  projectId: "remenyikeresztur",
  storageBucket: "remenyikeresztur.firebasestorage.app",
  messagingSenderId: "981331750744",
  appId: "1:981331750744:web:d93439261f6c48a6c4bf2d",
  measurementId: "G-CSQP9CS2QD"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
