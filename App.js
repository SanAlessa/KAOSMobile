import React from 'react';
import Navigation from './Navigation'
import {Provider} from "react-redux"
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/rootReducer'

const miStore = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={miStore}>
     <Navigation/>
    </Provider>
    
  );
}


