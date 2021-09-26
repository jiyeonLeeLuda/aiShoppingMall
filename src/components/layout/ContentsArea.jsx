import styled from '@emotion/styled';

const ContentsBox = styled.div({
  // backgroundColor: "pink", //영역 체크용
  width: '85%',
  minHeight: '100vh',
  display: 'block',
  padding: '5%',
});

export default function ContentsArea({ className, contents }) {
  return (
    <ContentsBox className={className}>
      {contents}
    </ContentsBox>
  );
}
