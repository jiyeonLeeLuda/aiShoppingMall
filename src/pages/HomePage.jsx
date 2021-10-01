import YouTube from 'react-youtube';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';

export default function HomePage() {
  const YouTubeArea = styled.div({
    backgroundColor: '#000',
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  const opts = {
    height: '480',
    width: '1100',
    playerVars: {
      autoplay: 1,
      loop: 1,
      mute: 1,
      playlist: 'Tg7_CQ8NKSU',
    },
  };
  return (
    <Layout title="home">
      <YouTubeArea>
        <YouTube videoId="Tg7_CQ8NKSU" opts={opts} />
      </YouTubeArea>
    </Layout>
  );
}
