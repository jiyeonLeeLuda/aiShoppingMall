import { render } from '@testing-library/react';

import CartItemsTable from './CartItemsTable';

describe('CartItemsTable', () => {
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
  function renderCartItemsTable() {
    return render(
      <CartItemsTable
        cart={cart}
      />,
    );
  }

  it('renders cart table', () => {
    const { container } = renderCartItemsTable();

    expect(container).toHaveTextContent('상품정보');
    expect(container).toHaveTextContent('수량');
    expect(container).toHaveTextContent('상품 금액');
    expect(container).toHaveTextContent('A4 클립보드');
    expect(container).toHaveTextContent('2,000 원');
  });
});
