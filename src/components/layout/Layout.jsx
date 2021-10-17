import styled from '@emotion/styled';

import HeaderArea from './HeaderArea';
import FooterArea from './FooterArea';

const BodyArea = styled.main({
  height: '100vh',
});

export default function Layout({ children }) {
  return (
    <>
      <HeaderArea />
      <BodyArea>
        {children}
      </BodyArea>
      <FooterArea />
    </>
  );
}
