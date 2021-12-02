import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';
import styles from './ShopPageListItem.module.css';
import { currencyFomater, percentageCalculator } from '../../util/commonUtils';

const ItemTextSpan = styled.span(({ color = '#000', fontWeight = 'none' }) => ({
  color,
  fontWeight,
  fontsize: '0.8rem',
}));

export default function ShopPageListItem({ item }) {
  const { id, img, name, realPrice, originPrice, averageScore, reviews } = item;

  return (
    <article className={styles.item}>
      <Link to={`/shop/items/${id}`}>
        <img src={img} alt={name} />
        <div className={styles.itemReviewContainer}>
          <p className={styles.itemReviewText}>
            리뷰: <ItemTextSpan color='#f54505'>{reviews.length}</ItemTextSpan>
          </p>
          <ReactStarsRating
            className={styles.score}
            value={averageScore}
            isEdit={false}
          />
          <p className={styles.itemReviewText}>
            평점:
            <ItemTextSpan color='#f54505'>
              ({averageScore}
              /5)
            </ItemTextSpan>
          </p>
        </div>
        <p className={styles.itemTitle}>{name}</p>
        <div className={styles.itemPriceContainer}>
          <ItemTextSpan fontWeight='bold'>
            {currencyFomater({ number: realPrice })}
          </ItemTextSpan>
          <ItemTextSpan color='#ccc'>
            ({currencyFomater({ number: originPrice })})
          </ItemTextSpan>
          <ItemTextSpan color='#f00' fontWeight='bold'>
            {`${percentageCalculator({
              total: originPrice,
              partOf: originPrice - realPrice,
            })} 할인`}
          </ItemTextSpan>
        </div>
      </Link>
    </article>
  );
}
