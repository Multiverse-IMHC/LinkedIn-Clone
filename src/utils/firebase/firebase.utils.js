import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAcG9Dihe0wQjqbgAiuOjR4zfI_V-KN9Q",
  authDomain: "linkedinclone-9df2d.firebaseapp.com",
  projectId: "linkedinclone-9df2d",
  storageBucket: "linkedinclone-9df2d.appspot.com",
  messagingSenderId: "394689928761",
  appId: "1:394689928761:web:ccacd4a7bc8b022f1e77e8",
};

const linkedInCloneApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef;
};
