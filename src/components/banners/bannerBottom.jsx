import React, { memo } from 'react';

import ImageGallery from 'react-image-gallery';

const BannerBottom = memo(() => {
  const images = [
    {
      original: '/public/imgs/banners/banner_bottom1.png',
    },
    {
      original: '/public/imgs/banners/banner_bottom2.jpeg',
    },
  ];
  return (
    <a href='https://www.instagram.com/clumppy.by.wigglewiggle/'>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showThumbnails={false}
        showPlayButton={false}
        showNav={false}
        autoPlay
      />
    </a>
  );
});

export default BannerBottom;
