import styled from '@emotion/styled';
import ShopContainer from '../../components/ShopContainer';

export default function ShopPage() {
  const Title = styled.h2({
    textAlign: 'center',
  });

  return (
    <section>
      <Title>전체 상품</Title>
      <ShopContainer />
    </section>
  );
}
