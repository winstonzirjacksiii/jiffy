import React from 'react';
import GifCard from '../components/GifCard';

function GifGrid({gifs}) {
  const gifCards = gifs.map((gifObj, index) => <GifCard key={index} gifObj={gifObj} />);

  return (
    <section>
      <div className="m-gif-grid">
        {gifCards}
      </div>
    </section>
  );
}

export default GifGrid;