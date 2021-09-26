import styled from '@emotion/styled';

const Notice = styled.p({
  color: '#C14',
});

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const Table = styled.table`
  min-width: 700px;
  margin-top: 40px;
  position: relative;
`;
const Thead = styled.thead({
  backgroundColor: '#ccc',
  height: '40px',
  fontWeight: 'bold',
  fontSize: '17px',
});
const Tbody = styled.tbody`
  text-align: center;
  padding: 10px 0;
  height: 20px;
  font-size: 14px;
`;

const ItemRowImg = styled.td({
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  '& img': {
    margin: '10px',
    width: '70px',
  },
});

const ItemRow = styled.tr({
  height: '100px',
  marginTop: '10px',
  display: 'flow',
  '& p': {
    width: '300px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    color: '#333',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: 'bolder',
  },

});

const DelteButton = styled.button({
  backgroundColor: 'gray',
  color: 'white',
  fontWeight: 'bold',
  marginTop: '10px',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  width: 'auto',
  border: 'none',
  borderRadius: '4px',
});

const AmountBoxGruop = styled.div({
  width: '700px',
  display: 'flex',
  direction: 'row',
  justifyContent: 'space-around',
  marginTop: '40px',
});

const AmountBox = styled.div({
  maxWidth: '100px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  '& p': {
    fontsize: '2em',
  },
  '& span': {
    fontWeight: 'bolder',
    fontsize: '1em',
  },
});

const OrderButton = styled.button({
  backgroundColor: 'tomato',
  marginTop: '60px',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  display: 'inline-block',
  width: '50%',
  border: 'none',
  borderRadius: '4px',
  '& a': {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
    },
  },
});

export {
  Notice,
  Container,
  Table,
  Thead,
  Tbody,
  DelteButton,
  ItemRow,
  ItemRowImg,
  AmountBoxGruop,
  AmountBox,
  OrderButton,
};
