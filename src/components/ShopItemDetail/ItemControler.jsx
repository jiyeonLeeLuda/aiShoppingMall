import styles from './ItemControler.module.css';

export default function ItemControler({ itemAmount, onChange, onClick }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>수량</p>
      <label htmlFor='ItemAmount'>
        <input
          className={styles.input}
          id='ItemAmount'
          type='number'
          value={itemAmount}
          onChange={(event) => {
            onChange(event);
          }}
        />
      </label>
      <button className={styles.button} type='button' onClick={onClick}>
        장바구니 담기
      </button>
    </div>
  );
}
