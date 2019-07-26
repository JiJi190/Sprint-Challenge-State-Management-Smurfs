import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {smurfReducer} from './reducers/reducer'


ReactDOM.render(
    <App />
,document.getElementById("root"));
