import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, Item } from '../styles/Menu';

const MenuBar = memo(({ authService }) => {
  const [loginUser, setLoginUser] = useState({ uid: null, displayName: null });
  useEffect(() => {
    authService.onAuthChange(setLoginUser);
  }, [authService]);
  return (
    <div>
      <List>
        <Item>
          <Link to='/shop/items'>Shop</Link>
        </Item>
        <Item>
          <Link to='/cart'>Cart</Link>
        </Item>
        <Item>
          <Link to='/board'>1:1 문의</Link>
        </Item>
        <Item>
          <Link to='/login'>{loginUser ? 'Logout' : 'Login'}</Link>
        </Item>
      </List>
    </div>
  );
});

export default MenuBar;
