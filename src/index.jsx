import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Counter from './Counter';
import Bmi from './Bmi';
import Shop from './Shop';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<Shop/>}
    

    {/*<Bmi/>*/}
    {/*<Counter />*/}
    {/*<Hello name = "korawit" age={38}/>*/}
    {/*<Hello name = "Sowachai" age={11}/>*/ }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
