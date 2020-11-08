import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: "AIzaSyAjnEbViKX7ByweLKp7wkmYbtvIYXy7YXk",
    authDomain: "facebook-clone-5f2f1.firebaseapp.com",
    databaseURL: "https://facebook-clone-5f2f1.firebaseio.com",
    projectId: "facebook-clone-5f2f1",
    storageBucket: "facebook-clone-5f2f1.appspot.com",
    messagingSenderId: "1092919374746",
    appId: "1:1092919374746:web:e1f753067cdedfcf904023",
    measurementId: "G-DGE5RS16YB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider } ;
  export default db;