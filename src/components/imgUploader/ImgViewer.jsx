import React from 'react';
import styles from './ImgViewer.module.css';

const DEFAULT_IMAGE = '/public/imgs/default-img.jpeg';
const ImgViewer = ({ imgUrl }) => {
  const url = imgUrl || DEFAULT_IMAGE;
  return <img className={styles.img} src={url} alt='첨부파일' />;
};

export default ImgViewer;
