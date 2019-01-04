import * as firebase from 'firebase';

const config = {
        apiKey: "AIzaSyA_gwZLjUkubefvvwriUaeWONbUY9v0l6k",
        authDomain: "inviteme-629b2.firebaseapp.com",
        databaseURL: "https://inviteme-629b2.firebaseio.com",
        projectId: "inviteme-629b2",
        storageBucket: "",
        messagingSenderId: "333781711475"
}


export const firebaseApp = firebase.initializeApp(config);

export const inviteRef = firebase.database().ref("invites");
