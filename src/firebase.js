import firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDwIDcTN6iTHzgpBXa3XvETwgjLP1kHsoM",
  authDomain: "disneyplus-clone-94df9.firebaseapp.com",
  projectId: "disneyplus-clone-94df9",
  storageBucket: "disneyplus-clone-94df9.appspot.com",
  messagingSenderId: "601542375921",
  appId: "1:601542375921:web:e510967174a4e4fbf9ac50",
  measurementId: "G-YDPCJJFWLZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebaseApp.auth.GoogleAuthProvider();
const storage = firebase.storage();
const analytics = getAnalytics(firebaseApp);

export { auth, provider, storage };
export default db;
