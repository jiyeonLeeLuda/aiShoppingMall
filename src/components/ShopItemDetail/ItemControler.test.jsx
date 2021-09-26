import { render } from '@testing-library/react';

import ItemControler from './ItemControler';

jest.mock('react-redux');
describe('ItemControler', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
    onClick.mockClear();
  });

  function renderAmountContainer({ itemAmount }) {
    return render(
      <ItemControler
        itemAmount={itemAmount}
        onChange={onChange}
        onClick={onClick}
      />,
    );
  }
  it('renders "수량" input & "장바구니 담기" button', () => {
    const { container } = renderAmountContainer({ itemAmount: 1 });

    expect(container).toHaveTextContent('수량');
    expect(container).toHaveTextContent('장바구니 담기');
  });
});
