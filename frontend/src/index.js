import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import markerSDK from '@marker.io/browser';

import FloatingButton from './Components/FloatingButton';

const root = document.getElementById('root');

// async function main() {
//   const widget = await markerSDK.loadWidget({
//     project: '646b86d58e0917e2d500f50e',
//   });

//   widget.hide();

//   const showMarkerForm = () => {
//     console.log("show marker form is called");
//     widget.show();
//   };

//   ReactDOM.render(
//     <React.StrictMode>
//       <App>
//         <FloatingButton onClick={()=>{widget.show(); console.log("show marker tool was called")}} />
//       </App>
//     </React.StrictMode>,
//     root
//   );

//   reportWebVitals();
// }

// main();
