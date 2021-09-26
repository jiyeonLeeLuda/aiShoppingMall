import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { currencyFomater, percentageCalculator } from '../util/commonUtils';

const GridItem = styled.div({
  placeSelf: 'start center',
  '& p': {
    width: '265px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    color: '#333',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: 'bolder',
  },
});

const ItemTextGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
});

const ItemTextSpan = styled.span(({ color = '#000', fontWeight = 'none' }) => ({
  color,
  fontWeight,
}));

export default function ShopPageListItem({ item }) {
  const {
    id, img, name, realPrice, originPrice,
  } = item;

  return (
    <GridItem>
      <Link to={`/shop/items/${id}`}>
        <img src={img} alt={name} />
        <p>{name}</p>
        <ItemTextGroup>
          <ItemTextSpan fontWeight="bold">
            {currencyFomater({ number: realPrice })}
          </ItemTextSpan>

          <ItemTextSpan color="#ccc">
            (
            {currencyFomater({ number: originPrice })}
            )
          </ItemTextSpan>
          <ItemTextSpan color="#f00" fontWeight="bold">
            {`${percentageCalculator({
              total: originPrice,
              partOf: originPrice - realPrice,
            })} 할인`}
          </ItemTextSpan>
        </ItemTextGroup>
      </Link>
    </GridItem>
  );
}
