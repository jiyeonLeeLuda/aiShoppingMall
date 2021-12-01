import YouTube from 'react-youtube';
import styled from '@emotion/styled';
import { aiRecomands, bests } from '../../../dummyDatas/recomandItems.json';
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
    <>
      <BannerTop />
      <section className={styles.recomands}>
        <h3>맞춤 추천 상품</h3>
        <RecomandList items={aiRecomands} />
        <h3>BEST</h3>
        <RecomandList items={bests} />
      </section>
      <section className={styles.about}>
        <h1 className={styles.aboutTitle}>About Us...</h1>

        <YouTubeArea>
          <YouTube videoId='Tg7_CQ8NKSU' opts={opts} />
        </YouTubeArea>
        <article className={styles.aboutEng}>
          <p>
            <b>Wiggle Wiggle</b> started with a simple question
            <br />
            that <i> "Isn't there anything that repeats and is also funny ?"</i>
            <br /> How about changing your life with full of fun
            <br /> by unique designs of Wiggle Wiggle?
          </p>
        </article>
        <article className={styles.aboutKor}>
          <p>
            반복되는 것들로 가득 찬 일상이 지루하게 느껴질 때가 있습니다.
            <br />
            <b>위글위글</b>은 <i>"반복적이면서 즐거운 것은 없을까?"</i> <br />
            라는 단순한 물음으로 시작되었습니다.
            <br />
            톡톡 튀는 컬러와 개성 넘치는 위글위글 디자인으로
            <br />
            당신의 일상을 즐거움으로 가득 채워보는 것은 어떨까요?
          </p>
        </article>
      </section>

      <BannerBottom />
    </>
  );
}
