// "use client"
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './features/counter/counterSlice'
import AuthReducer from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth : AuthReducer
  }
});

export default store;
