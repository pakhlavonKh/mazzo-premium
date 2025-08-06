import React from 'react';

function Gallery() {
  return (
      <section className="gallery">
        {Array.from({ length: 14 }, (_, i) => `img/gal-${i + 1}.jpeg`).map((src, index) => (
          <figure key={index} className={`gallery__item gallery__item--${index + 1}`}>
            <img src={src} alt={`Gallery  ${index + 1}`} className="gallery__img" />
          </figure>
        ))}
      </section>
  );
}

export default Gallery;