import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-image-gallery/styles/css/image-gallery.css';
import firebaseApp from './services/firebase';
import Repositoty from './services/repository';
import AuthService from './services/auth';
import App from './App';
import store from './redux/store';

const db = new Repositoty();
const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App db={db} authService={authService} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('app')
);
