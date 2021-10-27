import {
 getAuth,
 signInWithPopup,
 GoogleAuthProvider,
 onAuthStateChanged,
 signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
 const [user, setUser] = useState([]);

 // sign in gogle
 const googleSignIn = () => {
  signInWithPopup(auth, googleProvider)
   .then((result) => {
    // console.log(result.user);
   })
   .catch((err) => {
    console.log(err.message);
   });
 };

 //  observer
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   }
  });
  return unsubscribe;
 }, []);

 //  logout
 const logOut = () => {
  signOut(auth)
   .then(() => {
    setUser({});
   })
   .catch((error) => {
    console.log(error.message);
   });
 };

 return {
  user,
  googleSignIn,
  logOut,
 };
};

export default useFirebase;
