import React from 'react';
import RecomandItem from '../recomandItem/recomandItem';
import styles from './recomandList.module.css';

const RecomandList = ({ items }) => (
  <ol className={styles.list}>
    {items.map((item) => (
      <RecomandItem key={item.id} item={item} />
    ))}
  </ol>
);

export default RecomandList;
