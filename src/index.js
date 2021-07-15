import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

import App from './App';

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

