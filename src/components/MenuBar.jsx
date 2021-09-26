import { Link } from 'react-router-dom';

import { List, Item } from '../styles/Menu';

export default function MenuBar() {
  return (
    <div>
      <List>
        <Item>
          <Link to="/works">Works</Link>
        </Item>
        <Item>
          <Link to="/shop/items">Shop</Link>
        </Item>
        <Item>
          <Link to="/cart">Cart</Link>
        </Item>
        <Item>
          <Link to="/login">Login</Link>
        </Item>
      </List>
    </div>
  );
}
