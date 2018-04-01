import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB_rTLR07bsRm7V9KI1CRcL6L6ou3A55ms",
    authDomain: "pruebas-db9b9.firebaseapp.com",
    databaseURL: "https://pruebas-db9b9.firebaseio.com",
    projectId: "pruebas-db9b9",
    storageBucket: "pruebas-db9b9.appspot.com",
    messagingSenderId: "592217972367"
  };
  firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
