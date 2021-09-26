import { useSelector } from 'react-redux';

import shopItems from '../../dummyDatas/shopItems.json';
import ShopPageList from './ShopPageList';
import SortOptions from './SortOptions';
import { get } from '../util/commonUtils';

export default function ShopContainer() {
  // todo : 여기서 fetch하여 데이터 가져옴
  const { dummyItems: items } = shopItems;

  // sortOption 값 확인 & 선택된 값대로 정렬후 새 items 리턴
  const itemSorts = {
    orderByCreatedAt: (a, b) => a.id - b.id,
    orderByPopularity: (a, b) => b.averageScore - a.averageScore,
    orderByLowPrice: (a, b) => a.realPrice - b.realPrice,
    orderByHighPrice: (a, b) => b.realPrice - a.realPrice,
  };
  const sortOption = useSelector(get('sortOption'));
  const sortedItems = [...items].sort(
    itemSorts[sortOption || 'orderByCreatedAt'],
  );

  return (
    <>
      <SortOptions />
      <ShopPageList items={sortedItems} />
    </>
  );
}
