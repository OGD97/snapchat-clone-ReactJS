import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBMD4A0gp91cE8iuTmaBg79_FNx2A_WkXg",
    authDomain: "snapchat-clone-d7d43.firebaseapp.com",
    projectId: "snapchat-clone-d7d43",
    storageBucket: "snapchat-clone-d7d43.appspot.com",
    messagingSenderId: "227978072317",
    appId: "1:227978072317:web:6a994fec0784ea01cbee94"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider};
  
//   const provider = new firebase.auth.EmailAuthProvider();