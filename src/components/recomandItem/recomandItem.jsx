import React from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import styles from './recomandItem.module.css';

const RecomandItem = ({ item }) => {
  const { id, img, name, realPrice, score } = item;
  return (
    <li className={styles.item}>
      <a className={styles.link} href={`/shop/items/${id}`}>
        <img className={styles.img} src={img} alt={name} />
        <p className={styles.name}>{name}</p>
        <div className={styles.container}>
          <ReactStarsRating
            className={styles.score}
            value={score}
            isEdit={false}
          />
          <p className={styles.price}>{realPrice}원</p>
        </div>
      </a>
    </li>
  );
};

export default RecomandItem;
