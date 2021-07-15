import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAfe3GLNmN_v9EDhwmPvJn_ga5uOgi0c_o",
  authDomain: "chat-react-b9df5.firebaseapp.com",
  projectId: "chat-react-b9df5",
  storageBucket: "chat-react-b9df5.appspot.com",
  messagingSenderId: "847969231296",
  appId: "1:847969231296:web:b25c80fd4fd7a9db15a825"
};

firebase.initializeApp(firebaseConfig);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{firebase, auth, firestore}}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

