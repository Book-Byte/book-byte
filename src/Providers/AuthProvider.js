"use client"
import store from '@/Redux/store';
import { Provider } from 'react-redux';

const AuthProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default AuthProvider;