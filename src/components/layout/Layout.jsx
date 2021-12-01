import styled from '@emotion/styled';

import HeaderArea from './HeaderArea';
import FooterArea from './FooterArea';

const BodyArea = styled.main({
  minHeight: '70vh',
});

export default function Layout({ children, authService }) {
  return (
    <>
      <HeaderArea authService={authService} />
      <BodyArea>{children}</BodyArea>
      <FooterArea />
    </>
  );
}
