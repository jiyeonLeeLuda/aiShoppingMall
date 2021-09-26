import { currencyFomater } from '../../util/commonUtils';
import { ItemRow, ItemRowImg } from '../../styles/CartPageStyle';

export default function CartItemRow({ item, onChangeCheckBox, onChangeItemAmount }) {
  const {
    id, name, img, itemAmount, realPrice, checked,
  } = item;
  const checkBoxLabel = `cartItem${id}`;
  const amountInputLabel = `item${id}Amount`;

  function onChangeAmount(event) {
    const { target: { value } } = event;
    onChangeItemAmount({ itemAmount: value, itemId: id });
  }
  return (
    <ItemRow>
      <td>
        <label htmlFor={checkBoxLabel}>
          <input
            aria-label={checkBoxLabel}
            id={checkBoxLabel}
            type="checkbox"
            name={id}
            value={id}
            checked={checked || false}
            onChange={(event) => {
              onChangeCheckBox(event);
            }}
          />
        </label>
      </td>
      <ItemRowImg>
        <img src={img} alt={name} />
        <p>{name}</p>
      </ItemRowImg>
      <td>
        <label htmlFor={amountInputLabel}>
          <input
            aria-label={amountInputLabel}
            id={amountInputLabel}
            type="number"
            value={itemAmount}
            onChange={(event) => {
              onChangeAmount(event);
            }}
          />
          개
        </label>
      </td>
      <td>{currencyFomater({ number: realPrice })}</td>
    </ItemRow>
  );
}
