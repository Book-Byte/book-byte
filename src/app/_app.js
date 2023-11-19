"use client"
import store from '@/Redux/store';
import { Provider } from 'react-redux';

function CustomProvider({ children}) {
  return (
    <Provider store={store}>
      {/* <Component {...pageProps} /> */} {children}
    </Provider>
  );
}

export default CustomProvider;
