import { useParams } from 'react-router-dom';

import ItemDetailContainer from '../../components/ShopItemDetail/ItemDetailContainer';

export default function ShopItemDetailPage({ params }) {
  const { id } = params || useParams();

  return <ItemDetailContainer id={id} />;
}
