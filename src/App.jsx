import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import WorksPage from './pages/WorksPage';
import ShopPage from './pages/ShopPage';
import ShopItemDetailPage from './pages/ShopItemDetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/works/:id" component={WorksPage} />
      <Route exact path="/works" component={WorksPage} />
      <Route path="/shop/items/:id" component={ShopItemDetailPage} />
      <Route path="/shop/items/" component={ShopPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/order" component={OrderPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
