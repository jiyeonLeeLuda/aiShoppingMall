import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';
import BoardPage from './pages/BoardPage';
import ShopPage from './pages/ShopPage';
import ShopItemDetailPage from './pages/ShopItemDetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/board/:id' component={BoardPage} />
      <Route exact path='/board' component={BoardPage} />
      <Route path='/shop/items/:id' component={ShopItemDetailPage} />
      <Route path='/shop/items/' component={ShopPage} />
      <Route path='/cart' component={CartPage} />
      <Route path='/order' component={OrderPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
