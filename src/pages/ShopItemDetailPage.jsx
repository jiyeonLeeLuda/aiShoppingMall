import { useParams } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import ItemDetailContainer from '../components/ShopItemDetail/ItemDetailContainer';

export default function ShopItemDetailPage({ params }) {
  const { id } = params || useParams();

  return (
    <Layout title="상세보기">
      <ItemDetailContainer id={id} />
    </Layout>
  );
}
