
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClbVcnZ9GTHTq9ddNpRlSRd-f5OyU4OZo",
  authDomain: "netflex-clone-5364c.firebaseapp.com",
  projectId: "netflex-clone-5364c",
  storageBucket: "netflex-clone-5364c.appspot.com",
  messagingSenderId: "148657197079",
  appId: "1:148657197079:web:c3c39530b6a5753af44c52",
  measurementId: "G-9DMSJGHZL5"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);