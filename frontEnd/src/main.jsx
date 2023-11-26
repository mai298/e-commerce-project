import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from '../src/Redux/store.js'
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.js'; // Assuming your i18n configuration file is at './i18n.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <I18nextProvider i18n={i18n}>
      <Provider store={store}>
    <App />
    </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
