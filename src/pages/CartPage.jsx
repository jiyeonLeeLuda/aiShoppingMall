import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartContainer from '../components/cart/CartContainer';
import Layout from '../components/layout/Layout';
import { Notice, Container } from '../styles/CartPageStyle';
import { get } from '../util/commonUtils';
import { synchonizeCart } from '../redux/slice';

export default function CartPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(synchonizeCart());
  }, []);

  const cart = useSelector(get('cart'));

  if (!(cart || []).length) {
    return (
      <Layout title="Cart">
        <Container>
          <Notice>장바구니가 비었어요!</Notice>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Cart">
      <CartContainer cart={cart} />
    </Layout>
  );
}
