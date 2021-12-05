import styled from '@emotion/styled';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import MenuBar from '../MenuBar';

const Header = styled.header({
  paddingTop: '50px',
  '& img': {
    margin: 'auto',
  },
});

function HeaderArea({ authService }) {
  return (
    <Header>
      <Link to='/'>
        <img src='../../../public/imgs/toplogo_black.png' alt='logo' />
      </Link>
      <MenuBar authService={authService} />
    </Header>
  );
}

export default memo(HeaderArea);
