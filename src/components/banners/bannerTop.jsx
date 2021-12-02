import React, { memo } from 'react';

import ImageGallery from 'react-image-gallery';

const BannerTop = memo(() => {
  const images = [
    {
      original: '/public/imgs/banners/banner0.jpeg',
    },
    {
      original: '/public/imgs/banners/banner01.jpeg',
    },
    {
      original: '/public/imgs/banners/banner02.jpeg',
    },
    {
      original: '/public/imgs/banners/banner03.jpeg',
    },
  ];
  return (
    <a href='/shop/items'>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showThumbnails={false}
        showPlayButton={false}
        showNav={false}
        showBullets
        autoPlay
        preventDefaultTouchmoveEvent
      />
    </a>
  );
});

export default BannerTop;
