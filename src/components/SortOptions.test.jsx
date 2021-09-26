import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import SortOptions from './SortOptions';

jest.mock('react-redux');

describe('SortOptions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      sortOption: '',
    }));
  });
  it('renders sort options', () => {
    const { container } = render(<SortOptions />);

    expect(container).toHaveTextContent('등록일순');
    expect(container).toHaveTextContent('인기순');
    expect(container).toHaveTextContent('낮은 가격순');
    expect(container).toHaveTextContent('높은 가격순');
  });

  it('changes sortOption', () => {
    const { getByText } = render(<SortOptions />);

    fireEvent.click(getByText('인기순'));

    expect(dispatch).toBeCalledWith({
      type: 'application/selectSortOption',
      payload: 'orderByPopularity',
    });
  });
});
