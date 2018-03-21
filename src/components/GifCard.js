import React from 'react';

function GifCard({gifObj}) {
  const {images, title, url, user} = gifObj;
  return (
    <article>
      <a href={url} target="_blank">
        <img src={images.downsized_large.url} alt={title} />
      </a>
    </article>
  );
}

export default GifCard;