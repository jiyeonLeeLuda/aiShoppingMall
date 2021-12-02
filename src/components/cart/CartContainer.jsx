import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import {
  changeCartItemCheked,
  changeCartItemChekedAll,
  removeSelectedCartIem,
  changeCartItemAmount,
} from '../../redux/slice';
// import CartItemTable from './CartItemsTable';
import CartItemTable from './CartItemsTable';
import CartAmountGroup from './CartAmountGroup';

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: '3rem',
});

export default function CartContainer({ cart }) {
  const dispatch = useDispatch();

  function onChangeCheckBox(event) {
    const {
      target: { value: itemId, checked },
    } = event;
    dispatch(changeCartItemCheked({ itemId, checked }));
  }

  function onChangeCheckBoxAll(event) {
    const {
      target: { checked },
    } = event;

    dispatch(changeCartItemChekedAll({ checked }));
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
        onChangeCheckBoxAll={onChangeCheckBoxAll}
      />
      <CartAmountGroup cart={cart} />
    </Container>
  );
}
