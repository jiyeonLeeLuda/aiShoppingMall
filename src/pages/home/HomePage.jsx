import YouTube from 'react-youtube';
import styled from '@emotion/styled';
import { items } from '../../../dummyDatas/recomandItems.json';
import Layout from '../../components/layout/Layout';
import BannerTop from '../../components/banners/bannerTop';
import BannerBottom from '../../components/banners/bannerBottom';
import RecomandList from '../../components/recomandList/recomandList';
import styles from './homePage.module.css';

export default function HomePage() {
  const YouTubeArea = styled.section({
    backgroundColor: '#000',
    position: 'relative',
    width: '100%',
    height: '550px',
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
    <Layout title='home'>
      <BannerTop />
      <section className={styles.recomands}>
        <h3 className={styles.titleRecomands}>맞춤 추천 상품</h3>
        <RecomandList items={items} />
      </section>

      <YouTubeArea>
        {/* <YouTube videoId='Tg7_CQ8NKSU' opts={opts} /> */}
      </YouTubeArea>
      <BannerBottom />
    </Layout>
  );
}
