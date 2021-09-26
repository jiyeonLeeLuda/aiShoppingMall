import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ShopPage from './ShopPage';

describe('ShopPage', () => {
  it('renders page', () => {
    const { container } = render(
      <MemoryRouter>
        <ShopPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('전체 상품');
    expect(container).toHaveTextContent('등록일순');
    expect(container).toHaveTextContent('2,000 원');
  });
});
