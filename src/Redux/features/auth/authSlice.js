import { app } from "@/Firebase/Firebase";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const auth = getAuth(app);

const initialState = {
    userData: null,
    loading: true,
    error: '',
    success: ''
};

export const checkCurrentUserAsync = createAsyncThunk(
    'auth/checkCurrentUser',
    async (_, { dispatch }) => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // const userData = {name: user.displayName, email: user.email}
                dispatch(holdCurrentUser(currentUser));
            } else {
                dispatch(resetStatus())
                dispatch(removeUser());
            }
        });

        return unsubscribe();
    }
);



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createAccount: (state, action) => {
            if (action.type === 'auth/createAccount') {
                state.loading = action.payload.loading;
                state.userData = action.payload.userData;
                state.error = action.payload.error;
                state.success = action.payload.success;
            }
        },
        login : (state, action) => {
            if (action.type === 'auth/login') {
                state.loading = action.payload.loading;
                state.userData = action.payload.userData;
                state.error = action.payload.error;
                state.success = action.payload.success;
            }
        }
        ,
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

export const { createAccount, customError, resetStatus, removeUser, holdCurrentUser, login } = authSlice.actions;

export default authSlice.reducer;
