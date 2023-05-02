import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/reducer"
// import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-8edf4g0sx443v1v2.us.auth0.com"
  //   clientId='UaOlmWYYf8nFWaMc3745QBXJAIsdOY6q'
  //   authorizationParams={{
  //     redirect_uri: "/login"
  //   }}
  // >
  // </Auth0Provider>
  <Provider store={store}>
    <App />
  </Provider>
);


// window.location.origin

