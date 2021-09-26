import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import ItemDetailContainer from './ItemDetailContainer';

jest.mock('react-redux');
describe('ItemDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderAmountContainer() {
    const itemID = '1';
    return render(<ItemDetailContainer id={itemID} />);
  }
  it('renders item amount input & add cart button', () => {
    const { container } = renderAmountContainer();

    expect(container).toHaveTextContent('수량');
    expect(container).toHaveTextContent('장바구니 담기');
  });

  context('when "수량" field change', () => {
    it('updates item Amount value', () => {
      const value = 5;
      const { getByLabelText } = renderAmountContainer();
      const itemAmountFiled = getByLabelText('수량');

      fireEvent.change(itemAmountFiled, { target: { value } });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeItemAmountField',
        payload: value,
      });
    });
  });

  context('when click "장바구니 담기" button', () => {
    it('adds item Infomaion to localStorage', () => {
      const { getByText } = renderAmountContainer();
      const itemToCartButton = getByText('장바구니 담기');

      fireEvent.click(itemToCartButton);

      expect(dispatch).toBeCalled();
    });
  });
});
