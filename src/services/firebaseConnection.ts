import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5pC65c-XWo1il81bK7cdX5ynYgZl7HVo",
  authDomain: "nexttask-e21ad.firebaseapp.com",
  projectId: "nexttask-e21ad",
  storageBucket: "nexttask-e21ad.appspot.com",
  messagingSenderId: "1067694070509",
  appId: "1:1067694070509:web:bc9fbdda2a3a0c3d924ae4"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }