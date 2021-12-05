import styled from '@emotion/styled';
import { memo } from 'react';

const Footer = styled.footer({
  backgroundColor: '#CCC',
  margin: 0,
  padding: '1em .5em',
  '& p': {
    display: 'flex',
    justifyContent: 'center',
  },
});

function FooterArea() {
  return (
    <Footer>
      <p>
        studio ABC | dlwldusq.work@gmail.com | © 2021 스튜디오 루다 Co. all
        rights reserved.
      </p>
      <p> 개인 포트폴리오 프로젝트로 작업된 웹사이트 입니다.</p>
    </Footer>
  );
}

export default memo(FooterArea);
