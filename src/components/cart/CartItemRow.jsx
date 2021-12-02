import { TableRow, TableCell } from '@mui/material';
import { currencyFomater } from '../../util/commonUtils';
import styles from './CartItemRow.module.css';

export default function CartItemRow({
  item,
  onChangeCheckBox,
  onChangeItemAmount,
}) {
  const { id, name, img, itemAmount, realPrice, checked } = item;
  const checkBoxLabel = `cartItem${id}`;
  const amountInputLabel = `item${id}Amount`;

  function onChangeAmount(event) {
    const {
      target: { value },
    } = event;
    onChangeItemAmount({ itemAmount: value, itemId: id });
  }
  return (
    <TableRow>
      <TableCell>
        <label htmlFor={checkBoxLabel}>
          <input
            aria-label={checkBoxLabel}
            id={checkBoxLabel}
            type='checkbox'
            name={id}
            value={id}
            checked={checked || false}
            onChange={(event) => {
              onChangeCheckBox(event);
            }}
          />
        </label>
      </TableCell>
      <TableCell>
        <a href={`/shop/items/${id}`} className={styles.itemInfo}>
          <img className={styles.itemImg} src={img} alt={name} />
          <p className={styles.itemName}>{name}</p>
        </a>
      </TableCell>
      <TableCell>
        <label htmlFor={amountInputLabel}>
          <input
            className={styles.itemCount}
            aria-label={amountInputLabel}
            id={amountInputLabel}
            type='number'
            value={itemAmount}
            onChange={(event) => {
              onChangeAmount(event);
            }}
          />
          개
        </label>
      </TableCell>
      <TableCell>{currencyFomater({ number: realPrice })}</TableCell>
    </TableRow>
  );
}
