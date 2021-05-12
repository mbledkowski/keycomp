import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcNvtVNx6uZUXvfly3XNbbU5ix04MqMs4",
  authDomain: "keycomp420.firebaseapp.com",
  databaseURL: "https://keycomp420.firebaseio.com",
  projectId: "keycomp420",
  storageBucket: "keycomp420.appspot.com",
  messagingSenderId: "30074653064",
  appId: "1:30074653064:web:e44c6ed4638f23bd62523d"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firebase service
const projectFirestore = firebase.firestore()

export { projectFirestore }