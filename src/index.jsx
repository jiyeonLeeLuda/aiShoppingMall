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
import Cloudnary from './services/cloudnary';
import ImgFileInput from './components/imgUploader/imgFileInput';

const db = new Repositoty();
const authService = new AuthService();
const imgUploadService = new Cloudnary(
  process.env.CLOUDNARY_CLOUD_NAME,
  process.env.CLOUDNARY_PRESET
);
const FileInput = (props) => (
  <ImgFileInput {...props} imgUploadService={imgUploadService} />
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App db={db} authService={authService} FileInput={FileInput} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('app')
);
