import { app } from "@/Firebase/Firebase";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(app);

const initialState = {
    user: null,
    loading: false,
    error: '',
    success: ''
};

export const createUserWithEmailAndPasswordAsync = createAsyncThunk(
    'auth/createUserWithEmailAndPassword',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.loading = false;
            state.error = '';
            state.success = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserWithEmailAndPasswordAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUserWithEmailAndPasswordAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.success = 'Signup successful';
            })
            .addCase(createUserWithEmailAndPasswordAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Signup failed';
            });
    }
});

export const { resetStatus,  } = authSlice.actions;

export default authSlice.reducer;
