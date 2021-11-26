import React from 'react';
import ReactDOM from 'react-dom';
import 'style/index.css';
import 'tailwindcss/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
reportWebVitals();
