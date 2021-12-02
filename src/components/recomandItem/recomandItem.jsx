import React from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import styles from './recomandItem.module.css';
import { currencyFomater } from '../../util/commonUtils';

const RecomandItem = ({ item }) => {
  const { id, img, name, realPrice, score, isBest } = item;
  const iconBest = '/public/imgs/best.png';
  return (
    <li className={styles.item}>
      <a className={styles.link} href={`/shop/items/${id}`}>
        <img className={styles.img} src={img} alt={name} />
        {isBest && (
          <img className={styles.iconBest} src={iconBest} alt='best' />
        )}
        <p className={styles.name}>{name}</p>
        <div className={styles.container}>
          <ReactStarsRating
            className={styles.score}
            value={score}
            isEdit={false}
          />
          <p className={styles.price}>
            {currencyFomater({ number: realPrice, currency: '원' })}
          </p>
        </div>
      </a>
    </li>
  );
};

export default RecomandItem;
