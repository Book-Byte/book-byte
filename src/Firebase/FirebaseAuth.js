import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, getAdditionalUserInfo } from "firebase/auth";
import { app } from "./Firebase";

export const auth = getAuth(app)
export const createUserByEmailPassword = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)
export const signInByEmailPassword = async (email, password) => await signInWithEmailAndPassword(auth, email, password)
export const signOutUser = async () => await signOut(auth)
// export const getUserData = async (userId) => getuserda
