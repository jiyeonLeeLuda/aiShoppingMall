import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import CsBoardPage from './pages/cs-board/CsBoardPage';
import ShopPage from './pages/ShopPage';
import ShopItemDetailPage from './pages/ShopItemDetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage';
import CsWritePage from './pages/cs-write/CsWritePage';
import CsViewerPage from './pages/cs-viewer/CsViewerPage';
import CsEditorPage from './pages/cs-editor/CsEditorPage';

export default function App({ db, authService }) {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login'>
        <LoginPage authService={authService} />
      </Route>
      <Route exact path='/board/write'>
        <CsWritePage db={db} />
      </Route>

      <Route path='/board/edit/:id'>
        <CsEditorPage db={db} />
      </Route>
      <Route path='/board/:id'>
        <CsViewerPage db={db} />
      </Route>
      <Route exact path='/board'>
        <CsBoardPage db={db} />
      </Route>
      <Route path='/shop/items/:id' component={ShopItemDetailPage} />
      <Route path='/shop/items/' component={ShopPage} />
      <Route path='/cart' component={CartPage} />
      <Route path='/order' component={OrderPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
