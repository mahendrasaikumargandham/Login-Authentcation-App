
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw3z872_wuLOPKnaa2p0D9fpjNMOXXLYI",
  authDomain: "fir-authreactnative-9479a.firebaseapp.com",
  projectId: "fir-authreactnative-9479a",
  storageBucket: "fir-authreactnative-9479a.appspot.com",
  messagingSenderId: "684788572695",
  appId: "1:684788572695:web:6eb69806ac14d8360ab252",
  measurementId: "G-V61ZP7DBQJ"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export { authentication };