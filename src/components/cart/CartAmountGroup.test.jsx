import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CartAmountGroup from './CartAmountGroup';

describe('CartAmountGroup', () => {
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
  function renderCartAmountGroup() {
    return render(
      <MemoryRouter>
        <CartAmountGroup cart={cart} />
      </MemoryRouter>,
    );
  }

  it('renders cart table', () => {
    const { container } = renderCartAmountGroup();

    expect(container).toHaveTextContent('총 상품 금액 2,000 원');
    expect(container).toHaveTextContent('배송비 3,000 원');
    expect(container).toHaveTextContent('총 주문금액 5,000 원');
    expect(container).toHaveTextContent(
      '30,000원 이하의 주문에는 배송비 3,000원이 추가됩니다.',
    );
  });
});
