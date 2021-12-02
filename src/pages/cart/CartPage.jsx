import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from '../../components/cart/CartContainer';
import { get } from '../../util/commonUtils';
import { synchonizeCart } from '../../redux/slice';
import styles from './CartPage.module.css';

export default function CartPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(synchonizeCart());
  }, []);

  const cart = useSelector(get('cart'));

  if (!(cart || []).length) {
    return <p className={styles.emptyCartTitle}>장바구니가 비었어요!</p>;
  }

  return <CartContainer cart={cart} />;
}
