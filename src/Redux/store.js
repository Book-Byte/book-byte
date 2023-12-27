"use client"
import { configureStore, createSerializableStateInvariantMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import AuthReducer from './features/auth/authSlice'
import CartReducer from './features/cart/cartSlice'

const serializableMiddleware = createSerializableStateInvariantMiddleware();
const middleware = [...getDefaultMiddleware(),serializableMiddleware];

export const store = configureStore({
  reducer: {
    auth : AuthReducer,
    cart : CartReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  }
});

export default store;
