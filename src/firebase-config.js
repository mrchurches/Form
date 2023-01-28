import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const {
  REACT_APP_APIKEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESAGGING_SENDER_ID,
  REACT_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESAGGING_SENDER_ID,
  appId: REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
