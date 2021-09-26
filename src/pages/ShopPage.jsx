import Layout from '../components/layout/Layout';
import { Title } from '../styles/Page';
import ShopContainer from '../components/ShopContainer';

export default function ShopPage() {
  return (
    <Layout title="Shop">
      <Title> 전체 상품 </Title>
      <ShopContainer />
    </Layout>
  );
}
