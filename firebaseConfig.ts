// src/firebaseConfig.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJsBrElhAKCwgukaDaOdl-2YRKMisEbeQ",
  authDomain: "portfolio-3db37.firebaseapp.com",
  projectId: "portfolio-3db37",
  storageBucket: "portfolio-3db37.appspot.com",
  messagingSenderId: "325164820738",
  appId: "1:325164820738:web:005c3f2aa2365e6addba1b"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
