import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ShopPageListItem from './ShopPageListItem';

describe('ShopPageListItem', () => {
  const item = {
    id: 1,
    name: '자석 마스크걸이',
    originPrice: 2000,
    realPrice: 1000,
    img: 'https://test.com/img.jpg',
  };

  it('renders item infos', () => {
    const { container } = render(
      <MemoryRouter>
        <ShopPageListItem item={item} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('자석 마스크걸이');
    expect(container).toHaveTextContent('1,000 원');
    expect(container).toHaveTextContent('2,000 원');
    expect(container).toHaveTextContent('50% 할인');
  });

  context('when click item', () => {
    it('changes url & moves page', () => {
      const history = createMemoryHistory();
      history.push = jest.fn();

      const { getByText } = render(
        <Router history={history}>
          <ShopPageListItem item={item} />
        </Router>,
      );

      fireEvent.click(getByText('자석 마스크걸이'));

      expect(history.push).toHaveBeenCalledWith(`/shop/items/${item.id}`);
    });
  });
});
