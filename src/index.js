import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Home, Solutions, About, ContactUs, Services, Blog, Academy,
} from "react-router-dom";

const routes = [Home, Solutions, About, Services, Blog, Academy, ContactUs];

// Create a root element to render the app into
const root = ReactDOM.createRoot(document.getElementById('root'));
React.useDebugValue(); // enable hooks debugging  in dev mode

function Router() {
  const pathname = window.location.pathname;
  let Component = Home; // default to Home if no route matches
  for (const element of routes) {
    if (element.path === pathname) {
      Component = element;
      break;
    }
  } 
  return <Component />;
}

root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
