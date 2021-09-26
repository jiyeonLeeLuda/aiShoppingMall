import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { changeItemAmountField, addItemToCart } from '../../redux/slice';
import { get } from '../../util/commonUtils';
import { dummyItems } from '../../../dummyDatas/shopItems.json';
import InfoArea from './InfoArea';
import ImgArea from './ImgArea';

const HeadGroup = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'center',
});
const BodyGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10% 1% 10% 1%',
});

export default function ItemDetailContainer({ id }) {
  // todo : fetch item info.

  const shopItem = dummyItems.find((item) => item.id === Number(id));

  const itemAmount = useSelector(get('itemAmount'));
  const dispatch = useDispatch();

  useEffect(() => {
    const defaultItemAmount = 1;
    return () => {
      // cleanUp : 다른 상품 페이지로 이동할 경우, 수량을 다시 1로 만들어줌.
      dispatch(changeItemAmountField(defaultItemAmount));
    };
  }, [id]);

  function handleAddItemToCart() {
    dispatch(addItemToCart(shopItem));
  }

  function handleItemAmount(event) {
    const { target: { value: amount } } = event;
    dispatch(changeItemAmountField(Number(amount)));
  }

  return (
    <>
      <HeadGroup>
        <ImgArea shopItem={shopItem} />
        <InfoArea
          shopItem={shopItem}
          itemAmount={itemAmount}
          handleItemAmount={handleItemAmount}
          handleAddItemToCart={handleAddItemToCart}
        />
      </HeadGroup>
      <BodyGroup>
        <p>{`상품 아이디 ${id} 디테일 컷`}</p>
        <img src={shopItem.descriptionImg} alt="상품 설명 이미지" />
      </BodyGroup>
    </>
  );
}
