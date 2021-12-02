import styled from '@emotion/styled';

import ShopPageListItem from './shopPageListItem/ShopPageListItem';

const GridContainer = styled.li({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gridGap: '30px 10px',
  listStyle: 'none',
  marginBottom: '5rem',
});

export default function ShopPageList({ items }) {
  return (
    <GridContainer>
      {items.map((item) => (
        <ShopPageListItem key={item.id} item={item} />
      ))}
    </GridContainer>
  );
}
