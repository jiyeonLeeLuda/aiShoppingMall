import React, { useRef, useState } from 'react';
import styles from './ImgFileInput.module.css';

const ImgFileInput = ({ imgUploadService, onChangeFile, fileName }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    // 로딩 스피너 시작
    setLoading(true);
    const file = event.target.files[0];
    const { name } = file;
    const url = await imgUploadService.uploadImage(file);
    console.log(url);
    // 로딩 스피너 끝
    setLoading(false);
    onChangeFile({ name, url });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type='file'
        name='file'
        accept='image/*'
        onChange={onChange}
      />
      {!loading && (
        <button type='submit' className={styles.btnImg} onClick={onClick}>
          {fileName || '이미지 업로드'}
        </button>
      )}

      {loading && <div className={styles.loading} />}
    </div>
  );
};

export default ImgFileInput;
