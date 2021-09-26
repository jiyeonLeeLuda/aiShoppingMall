import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import MenuBar from '../MenuBar';

const Header = styled.header({
  backgroundColor: '#EEE',
  '& h1': {
    margin: 0,
    padding: '1em .5em',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '& hover': {
      color: '#000',
    },
  },
});

export default function HeaderArea() {
  return (
    <Header>
      <h1>
        <Link to="/">STUDIO XX</Link>
      </h1>
      <MenuBar />
    </Header>
  );
}
