"use client"
import { configureStore, createSerializableStateInvariantMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import AuthReducer from './features/auth/authSlice'

const serializableMiddleware = createSerializableStateInvariantMiddleware();
const middleware = [...getDefaultMiddleware(),serializableMiddleware];

export const store = configureStore({
  reducer: {
    auth : AuthReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  }
});

export default store;
