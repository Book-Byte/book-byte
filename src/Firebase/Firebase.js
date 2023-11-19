import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.apiKey, 
  // authDomain: process.env.authDomain, 
  // projectId: process.env.projectId, 
  // storageBucket: process.env.storageBucket, 
  // messagingSenderId: process.env.messagingSenderId, 
  // appId: process.env.appId,
apiKey: process.env.NEXT_PUBLIC_apiKey ,
authDomain: process.env.NEXT_PUBLIC_authDomain ,
projectId: process.env.NEXT_PUBLIC_projectId ,
storageBucket: process.env.NEXT_PUBLIC_storageBucket ,
messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId ,
appId: process.env.NEXT_PUBLIC_appId ,
};

export const app = initializeApp(firebaseConfig);