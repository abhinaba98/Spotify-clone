import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { StateProvider } from "./utils/StateProvider";
import {initialState} from "./utils/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

