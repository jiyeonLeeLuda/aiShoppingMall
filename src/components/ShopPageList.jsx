import styled from '@emotion/styled';

import ShopPageListItem from './ShopPageListItem';

const GridContainer = styled.div({
  display: 'grid',
  gridAutoFlow: 'row',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30%, auto))',
  gridGap: '30px 10px',
  alignItems: 'center',
  alignContent: 'space-around',
  '& a': {
    textDecoration: 'none',
  },
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
