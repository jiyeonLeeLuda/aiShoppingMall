import styled from '@emotion/styled';

const ImgGroup = styled.div({
  display: 'flex',
  width: '300px',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
});
const PreviewGroup = styled.ul({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1em',
  margin: 0,
  listStyle: 'none',
});

const ImgViewer = styled.img({
  width: '300px',
});
const Previewer = styled.li({
  marginRight: '0.2em',
});

export default function ImgArea({ shopItem, detailImgIndex, handleDetailImgIndex }) {
  const { name, titleImgs } = shopItem;

  return (
    <ImgGroup>
      <ImgViewer src={`${titleImgs[detailImgIndex]}300`} alt={name} />
      <PreviewGroup>
        {titleImgs.map((img, index) => (
          <Previewer key={img} onClick={() => { handleDetailImgIndex(index); }}>
            <img src={`${img}40`} alt={name} />
          </Previewer>
        ))}
      </PreviewGroup>
    </ImgGroup>
  );
}
