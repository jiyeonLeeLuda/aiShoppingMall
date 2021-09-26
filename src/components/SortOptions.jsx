import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import Button from './Button';
import { selectSortOption } from '../redux/slice';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1em',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& button': {
    color: '#333',
    backgroundColor: '#fff',
    textDecoration: 'none',
    border: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
    },
  },
});

export default function SortOptions() {
  const dispatch = useDispatch();

  const options = [
    { id: 1, name: 'orderByCreatedAt', label: '등록일순' },
    { id: 2, name: 'orderByPopularity', label: '인기순' },
    { id: 3, name: 'orderByLowPrice', label: '낮은 가격순' },
    { id: 4, name: 'orderByHighPrice', label: '높은 가격순' },
  ];

  function handleClickSortOption({ value }) {
    dispatch(selectSortOption(value));
  }

  return (
    <List>
      {options.map((option) => (
        <Item key={option.id}>
          <Button
            name={option.name}
            label={option.label}
            onClick={handleClickSortOption}
          />
        </Item>
      ))}
    </List>
  );
}
