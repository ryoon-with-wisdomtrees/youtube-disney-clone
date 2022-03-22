import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  GoogleAuthProvider,
  getAuth,
  // initializeAuth,
  signInWithPopup,
} from "firebase/auth";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwIDcTN6iTHzgpBXa3XvETwgjLP1kHsoM",
  authDomain: "disneyplus-clone-94df9.firebaseapp.com",
  projectId: "disneyplus-clone-94df9",
  storageBucket: "disneyplus-clone-94df9.appspot.com",
  messagingSenderId: "601542375921",
  appId: "1:601542375921:web:e510967174a4e4fbf9ac50",
  measurementId: "G-YDPCJJFWLZ",
};
// Version 9이상 부터는 기존 문법 적용 안되니까 아래사이트 참고해서 적용해 나갈 것
// npm https://www.npmjs.com/package/firebase
// 기본시작 https://firebase.google.com/docs/auth/web/start
// Google 로그인  https://firebase.google.com/docs/auth/web/google-signin#web-version-9_4
// 내가 마주한 에러 https://stackoverflow.com/questions/70445014/module-not-found-error-package-path-is-not-exported-from-package
// ㄴ----->  업데이트 이후, 변경된 신택스를 사용하라는 힌트를 얻음
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const signInWithPopup = signInWithPopup(auth, provider);
const storage = getFirestore();
console.log("auth", auth);
console.log("db", db);

export { auth, provider, storage };
export default db;
