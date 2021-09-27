import styled from '@emotion/styled';

import ShopPageListItem from './ShopPageListItem';

const GridContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gridGap: '30px 10px',
});

export default function ShopPageList({ items }) {
  return (
    <GridContainer listStyle="none">
      {items.map((item) => (
        <ShopPageListItem key={item.id} item={item} />
      ))}
    </GridContainer>
  );
}
