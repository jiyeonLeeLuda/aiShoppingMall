import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';
import CsBoardPage from './pages/cs-board/CsBoardPage';
import ShopPage from './pages/ShopPage';
import ShopItemDetailPage from './pages/ShopItemDetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage';
import CsWritePage from './pages/cs-write/CsWritePage';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={LoginPage} />
      <Route exact path='/board/write' component={CsWritePage} />
      <Route path='/board/:id' component={CsBoardPage} />
      <Route exact path='/board' component={CsBoardPage} />
      <Route path='/shop/items/:id' component={ShopItemDetailPage} />
      <Route path='/shop/items/' component={ShopPage} />
      <Route path='/cart' component={CartPage} />
      <Route path='/order' component={OrderPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
