import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProfile from './WaiterProfile';
import Login from './Login';
import Signup from "./Signup";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./State/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path='/Tables' element={<App/>}/>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/WaiterProfile' element={<UserProfile/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
