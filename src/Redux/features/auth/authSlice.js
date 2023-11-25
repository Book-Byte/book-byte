import { app } from "@/Firebase/Firebase";
import { createSlice, } from "@reduxjs/toolkit";
import {  getAuth, onAuthStateChanged, } from 'firebase/auth'

const auth = getAuth(app);

const initialState = {
    userData: null,
    loading: false,
    error: '',
    success: ''
};


// Thunk to start listening to authentication state changes
export const listenToAuthChanges = () => (dispatch) => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        try {
            if (currentUser) {
                const userData = { name: currentUser.displayName, email: currentUser.email };
                dispatch(holdCurrentUser(userData));
            } else {
                dispatch(resetStatus());
                dispatch(removeUser())
            }
        } catch (error) {
            // Handle error if needed
            console.error('Error handling auth changes:', error);
        }
    });

    return () => {
        unsubscribe();
    };
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startAuthAction : (state) =>{
            state.loading = true
        },
        createAccount: (state, action) => {
            if (action.type === 'auth/createAccount') {
                console.log(action.payload);
                state.loading = false;
                state.userData = action.payload;
                state.error = ''
                state.success = 'Login successfully'
            }
        },
        login : (state, action) => {
            if (action.type === 'auth/login') {
                console.log(action.payload);
                state.loading = false;
                state.userData = action.payload;
                state.error = ''
                state.success = 'Login successfully'
            }
        },
        googleLogin: (state, action) => {
            if (action.type === 'auth/googleLogin') {
                state.loading = false;
                state. userData = action.payload;
                state.error = '';
                state.success= 'Login successfully'
            }
        },
        holdCurrentUser : (state, action) =>{
            state.userData = action.payload
        },
        resetStatus : (state) => {
            state.loading = false;
            state.success = '';
            state.error = '';
        },
        removeUser : (state)=>{
            state.userData = null
        },
        customError: (state, action) => {       
                state.error = action.payload;
                state.loading = false
        },
    },
});

export const { createAccount, customError, resetStatus, removeUser, holdCurrentUser, login, googleLogin, startAuthAction } = authSlice.actions;

export default authSlice.reducer;
