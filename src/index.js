import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// import Login  from "./companents/Login.js";
// import Test  from "./companents/TestExam/Test.jsx.js";
import ExamTest  from "./companents/TestExam/ExamTest.jsx";
import Login from "./companents/LoginPage/Login.js";
import Error from "./companents/LoginPage/Error.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <App />}>
            <Route path='/examtest' element={<ExamTest/>}/>
          </Route>
            <Route path='/login'   element={<Login/>}/>
            <Route path='/error'   element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
