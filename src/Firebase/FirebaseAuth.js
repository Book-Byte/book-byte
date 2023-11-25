import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, getAdditionalUserInfo, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./Firebase";

const googleProvider = new GoogleAuthProvider()

export const auth = getAuth(app)
export const createUserByEmailPassword = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)
export const signInByEmailPassword = async (email, password) => await signInWithEmailAndPassword(auth, email, password)
export const signOutUser = async () => await signOut(auth)
export const updateUser =  (name) =>  updateProfile(auth.currentUser, {displayName : name})
export const signInWithGoogle = async () => await signInWithPopup(auth, googleProvider)
// export const getUserData = async (userId) => getuserda
