import styled from '@emotion/styled';

const ContentsBox = styled.div({
  // backgroundColor: '#A3C',//영역 체크용
  width: '15%',
  position: 'sticky',
  display: 'block',
  '& p': {
    fontSize: '1.5em',
    margin: '1.5em 0 0 1.5em',
  },
});

export default function NaviLeftArea({ title = '-' }) {
  if (title === 'home') {
    return null;
  }
  return (
    <ContentsBox>
      <p>{title}</p>
    </ContentsBox>
  );
}
