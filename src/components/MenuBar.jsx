import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Item } from '../styles/Menu';
import { get } from '../util/commonUtils';

const MenuBar = () => {
  const loginUser = useSelector(get('user'));
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
          <Link to='/board'>1:1 문의 게시판</Link>
        </Item>
        <Item>
          <Link to='/login'>{loginUser ? 'Logout' : 'Login'}</Link>
        </Item>
      </List>
    </div>
  );
};

export default MenuBar;
