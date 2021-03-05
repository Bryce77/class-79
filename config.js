import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBPwNDf-tRNhOav6ElN5L1hCZAVB1272Ic",
  authDomain: "booksanta-676d0.firebaseapp.com",
  projectId: "booksanta-676d0",
  storageBucket: "booksanta-676d0.appspot.com",
  messagingSenderId: "146825539412",
  appId: "1:146825539412:web:8e6f04efb15e121e0562c1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
