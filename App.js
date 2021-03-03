import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/Register'
import Login from './screens/Login'
import {Provider} from "react-redux"
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/rootReducer'

const miStore = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={miStore}>
      <Login/>
      {/* <Register/> */}
    </Provider>
    
  );
}


