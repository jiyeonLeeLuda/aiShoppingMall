import { Link } from 'react-router-dom';
import { currencyFomater, getSum, getPrices } from '../../util/commonUtils';
import {
  AmountBoxGruop,
  AmountBox,
  OrderButton,
  Notice,
  Container,
} from '../../styles/CartPageStyle';

export default function CartAmountGroup({ cart }) {
  const sumPrices = getSum(getPrices(cart));
  const deliveryFee = sumPrices > 30000 ? 0 : 3000;

  return (
    <Container>
      <AmountBoxGruop>
        <AmountBox>
          <p>총 상품 금액</p>
          <span>{currencyFomater({ number: sumPrices })}</span>
        </AmountBox>
        <AmountBox>
          <p> 배송비 </p>
          <span>{currencyFomater({ number: deliveryFee })}</span>
        </AmountBox>
        <AmountBox>
          <p> 총 주문금액</p>
          <span>{currencyFomater({ number: sumPrices + deliveryFee })}</span>
        </AmountBox>
      </AmountBoxGruop>
      <OrderButton type="button">
        <Link to="/order">주문하기</Link>
      </OrderButton>
      <Notice> 30,000원 이하의 주문에는 배송비 3,000원이 추가됩니다.</Notice>
    </Container>
  );
}
