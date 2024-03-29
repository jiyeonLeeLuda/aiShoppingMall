import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import CartPage from './CartPage';

jest.mock('react-redux');
describe('CartPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  function renderCartPage() {
    return render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );
  }

  context('without cart items', () => {
    it('renders page', () => {
      const { container } = renderCartPage();

      expect(container).toHaveTextContent('Cart');
      expect(dispatch).toBeCalled();
      expect(container).toHaveTextContent('장바구니가 비었어요');
    });
  });

  context('with cart items', () => {
    it('renders page', () => {
      const cart = [
        {
          id: 2,
          name: 'A4 클립보드 서류고정 클립파일 메뉴판 - You Make Me Smile',
          img: 'https://shop-phinf.pstatic.net/20210622_252/1624338139198P3j7V_JPEG/25473972910536764_1080261413.jpg?type=f296_296',
          originPrice: 4000,
          realPrice: 2000,
          averageScore: 3.4,
          itemAmount: 1,
        },
      ];

      useSelector.mockImplementation((selector) => selector({ cart }));

      const { container } = renderCartPage();

      expect(container).toHaveTextContent('Cart');
      expect(dispatch).toBeCalled();
      expect(container).toHaveTextContent('A4 클립보드');
      expect(container).toHaveTextContent('2,000 원');
      expect(container).toHaveTextContent(
        '30,000원 이하의 주문에는 배송비 3,000원이 추가됩니다.',
      );
    });

    context('when change amount input', () => {
      it('updates item amount', () => {
        const cart = [
          {
            id: 1,
            name: '아이템1',
            itemAmount: 1,
          },
        ];

        useSelector.mockImplementation((selector) => selector({ cart }));

        const { getByLabelText } = renderCartPage();

        const item = getByLabelText(`item${cart[0].id}Amount`);

        expect(item).toHaveDisplayValue('1');

        fireEvent.change(item, { target: { value: 2 } });

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toBeCalledWith({
          type: 'application/changeCartItemAmount',
          payload: {
            itemAmount: '2',
            itemId: 1,
          },
        });
      });
    });
    context('when click "체크박스" in cart item', () => {
      it('changes cart item - checked value', () => {
        const cart = [
          {
            id: 1,
            name: '아이템1',
            checked: true,
          },
          {
            id: 2,
            name: '아이템2',
            // checked: false or null
          },
        ];

        useSelector.mockImplementation((selector) => selector({ cart }));

        const { getByLabelText } = renderCartPage();

        const item1 = getByLabelText(`cartItem${cart[0].id}`);
        const item2 = getByLabelText(`cartItem${cart[1].id}`);

        expect(item1).toBeChecked();
        expect(item2).not.toBeChecked();

        fireEvent.click(item2);

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toBeCalledWith({
          type: 'application/changeCartItemCheked',
          payload: {
            checked: true,
            itemId: '2',
          },
        });
      });
    });
    context('when click "선택 상품 삭제"', () => {
      it('removes checked items', () => {
        const cart = [
          {
            id: 1,
            name: '아이템1',
            checked: true,
          },
          {
            id: 2,
            name: '아이템2',
            // checked: false or null
          },
        ];

        useSelector.mockImplementation((selector) => selector({ cart }));

        const { getAllByRole } = renderCartPage();

        const items = getAllByRole('checkbox');
        expect(items).toHaveLength((cart.length) + 1);
        // 체크박스 수 = cart에 담긴 item 갯수 + 전체 선택 체크박스 1개
      });
    });
  });
});
