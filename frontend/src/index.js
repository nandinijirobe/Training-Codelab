import React from 'react';
import Gleap from 'gleap';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import markerSDK from '@marker.io/browser';

const root = ReactDOM.createRoot(document.getElementById('root'));
async function main(){
  const widget = await markerSDK.loadWidget({
    project: '646b86d58e0917e2d500f50e',
  });

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  reportWebVitals();
}

// Gleap.initialize("79kP8M43ylmH2Z3pRAmdmdqZMgYz8jZZ");

main();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

