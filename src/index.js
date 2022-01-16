import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 메인페이지
import Main from './Main' // 로그인후
import Contacts from './Components/Contact' // 프로젝트
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


const rootElement = document.getElementById("root"); // Modal 초기셋팅

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter >
      <Routes>
        <Route exact path = "/" element={<App />}/> { /*MainPage*/ }
        <Route path = "/Main" element={<Main />}/> { /*MainPage*/ }
        <Route path = "/Contact" element={<Contacts />}/> { /*MainPage*/ }
      </Routes>
      {/*<Route path = "/Conatact" component={} /> Conatact*/ }
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);


reportWebVitals();
