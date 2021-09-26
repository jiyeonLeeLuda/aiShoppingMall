import { useDispatch } from 'react-redux';

import {
  changeCartItemCheked,
  removeSelectedCartIem,
  changeCartItemAmount,
} from '../../redux/slice';
import CartItemTable from './CartItemsTable';
import CartAmountGroup from './CartAmountGroup';
import { Container } from '../../styles/CartPageStyle';

export default function CartContainer({ cart }) {
  const dispatch = useDispatch();

  function onChangeCheckBox(event) {
    const {
      target: { value: itemId, checked },
    } = event;
    dispatch(changeCartItemCheked({ itemId, checked }));
  }

  function onClickDeleteButton() {
    dispatch(removeSelectedCartIem());
  }

  function onChangeItemAmount({ itemAmount, itemId }) {
    dispatch(changeCartItemAmount({ itemAmount, itemId }));
  }

  return (
    <Container>
      <CartItemTable
        cart={cart}
        onClickDeleteButton={onClickDeleteButton}
        onChangeCheckBox={onChangeCheckBox}
        onChangeItemAmount={onChangeItemAmount}
      />
      <CartAmountGroup cart={cart} />
    </Container>
  );
}
