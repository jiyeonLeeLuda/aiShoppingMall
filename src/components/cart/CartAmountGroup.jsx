import { currencyFomater, getSum, getPrices } from '../../util/commonUtils';
import styles from './CartAmountGroup.module.css';

export default function CartAmountGroup({ cart }) {
  const sumPrices = getSum(getPrices(cart));
  const deliveryFee = sumPrices >= 30000 ? 0 : 3000;
  const onClickOrder = () => {
    alert('주문하기 기능 준비중');
  };

  return (
    <section className={styles.container}>
      <article className={styles.amountBoxGruop}>
        <div className={styles.amountBox}>
          <p>총 상품 금액</p>
          <span className={styles.amount}>
            {currencyFomater({ number: sumPrices })}
          </span>
        </div>
        <div className={styles.amountBox}>
          <p> 배송비 </p>
          <span className={styles.amount}>
            {currencyFomater({ number: deliveryFee })}
          </span>
        </div>
        <div className={styles.amountBox}>
          <p> 총 주문금액</p>
          <span className={styles.amount}>
            {currencyFomater({ number: sumPrices + deliveryFee })}
          </span>
        </div>
      </article>
      <button type='button' className={styles.btnOrder} onClick={onClickOrder}>
        주문하기
      </button>
      <p className={styles.notice}> 30,000원 이상 주문시 배송비 무료!</p>
    </section>
  );
}
