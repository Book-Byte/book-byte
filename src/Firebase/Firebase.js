import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: "AIzaSyA4XaaNVpNzlyxC5PahZuW0vThUucTko0c",
  // authDomain: "book-byte-a4924.firebaseapp.com",
  // projectId: "book-byte-a4924",
  // storageBucket: "book-byte-a4924.appspot.com",
  // messagingSenderId: "299912786970",
  // appId: "1:299912786970:web:e4b2d3d93df38c427d0da3"
apiKey: process.env.NEXT_PUBLIC_apiKey ,
authDomain: process.env.NEXT_PUBLIC_authDomain ,
projectId: process.env.NEXT_PUBLIC_projectId ,
storageBucket: process.env.NEXT_PUBLIC_storageBucket ,
messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId ,
appId: process.env.NEXT_PUBLIC_appId ,
};

export const app = initializeApp(firebaseConfig);