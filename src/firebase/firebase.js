import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD-OK6yRue3OKEhyG9YDFqfhHXMuaOspEU",
    authDomain: "emp-system-fb.firebaseapp.com",
    databaseURL: "https://emp-system-fb.firebaseio.com",
    projectId: "emp-system-fb",
    storageBucket: "emp-system-fb.appspot.com",
    messagingSenderId: "730449111007",
    appId: "1:730449111007:web:aad599781628e4f55a466a",
    measurementId: "G-QPTRKRRKQ0"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
