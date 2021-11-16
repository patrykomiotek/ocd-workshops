import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { Text } from './Text';
// import { CounterFunc, CounterClass } from './components/Counter';
import { RegistrationForm } from './components/organisms/RegistrationForm';
// import { Blog } from './components/Blog';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <RegistrationForm />
  </div>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <Text>Hello!!!</Text>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
