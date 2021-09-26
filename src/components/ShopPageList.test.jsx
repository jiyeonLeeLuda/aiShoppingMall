import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ShopPageList from './ShopPageList';

describe('ShopPageList', () => {
  it('renders item infos', () => {
    const items = [
      {
        id: 1,
        name: '자석 마스크걸이',
        originPrice: 2000,
        realPrice: 1000,
        img: 'https://test.com/img1.jpg',
      },
      {
        id: 2,
        name: '우산',
        originPrice: 10000,
        realPrice: 5000,
        img: 'https://test.com/img2.jpg',
      },
    ];

    const { container } = render(
      <MemoryRouter>
        <ShopPageList items={items} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('자석 마스크걸이');
    expect(container).toHaveTextContent('우산');
  });
});
