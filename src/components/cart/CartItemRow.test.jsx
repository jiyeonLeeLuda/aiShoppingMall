import { fireEvent, render } from '@testing-library/react';

import CartItemRow from './CartItemRow';

jest.mock('react-redux');
describe('CartItemRow', () => {
  const onChangeCheckBox = jest.fn();
  const onChangeItemAmount = jest.fn();

  const item = {
    id: 2,
    name: 'A4 클립보드 서류고정 클립파일 메뉴판 - You Make Me Smile',
    img: 'https://shop-phinf.pstatic.net/20210622_252/1624338139198P3j7V_JPEG/25473972910536764_1080261413.jpg?type=f296_296',
    originPrice: 4000,
    realPrice: 2000,
    averageScore: 3.4,
    itemAmount: 1,
    checked: true,
  };
  function renderCartItemRow() {
    return render(
      <CartItemRow
        item={item}
        onChangeCheckBox={onChangeCheckBox}
        onChangeItemAmount={onChangeItemAmount}
      />,
    );
  }

  it('renders cart item row', () => {
    const { container } = renderCartItemRow();

    expect(container).toHaveTextContent('A4 클립보드');
    expect(container).toHaveTextContent('2,000 원');
  });

  context('when change amount input', () => {
    it('updates item amount', () => {
      const { getByLabelText } = renderCartItemRow();

      const inputAmount = getByLabelText(`item${item.id}Amount`);

      expect(inputAmount).toHaveDisplayValue('1');

      fireEvent.change(inputAmount, { target: { value: 2 } });

      expect(onChangeItemAmount).toBeCalled();
    });
  });
  context('when click "체크박스" in cart item', () => {
    it('changes cart item - checked value', () => {
      const { getByLabelText } = renderCartItemRow();

      const checkBox = getByLabelText(`cartItem${item.id}`);

      expect(checkBox).toBeChecked();

      fireEvent.click(checkBox);

      expect(onChangeCheckBox).toBeCalled();
    });
  });
});
