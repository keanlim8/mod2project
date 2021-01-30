import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBfHJYignUwhaaf3CgrSFVOvB3IqMcw7Ag",
  authDomain: "clique-873f8.firebaseapp.com",
  projectId: "clique-873f8",
  storageBucket: "clique-873f8.appspot.com",
  messagingSenderId: "536617280161",
  appId: "1:536617280161:web:1bc2191b8140ac6ea946e0",
  measurementId: "G-VJ332SCNCH"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const todoRef = firebase.database().ref('to-dos')
