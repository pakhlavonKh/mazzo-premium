import React, { useState, useRef, useEffect } from 'react';

function Carousel({ onImageClick }) {
  const images = [
    'img/carousel-1.jpg',
    'img/carousel-2.jpg',
    'img/carousel-3.jpg',
    'img/carousel-4.jpg',
    'img/carousel-5.jpg',
    'img/carousel-6.jpg',
  ];

  const [current, setCurrent] = useState(0);
  const itemRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Get item width on load and resize
  useEffect(() => {
    const updateItemWidth = () => {
      if (itemRef.current) {
        setItemWidth(itemRef.current.offsetWidth);
      }
    };
    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  const handleImageLoad = () => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth);
    }
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Swipe logic
  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;

    const deltaX = currentXRef.current - startXRef.current;

    if (deltaX > 50) {
      // Swipe right
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    } else if (deltaX < -50) {
      // Swipe left
      setCurrent((prev) => (prev + 1) % images.length);
    }

    isDraggingRef.current = false;
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="preview">
      <button onClick={handlePrev} className="preview__arrow preview__arrow--left">←</button>
      <div className="preview__wrapper">
        <div
          className="preview__carousel"
          style={{
            transform: `translateX(-${current * itemWidth}px)`,
            transition: itemWidth ? 'transform 0.5s ease-in-out' : 'none',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((src, index) => (
            <img
              key={index}
              ref={index === 0 ? itemRef : null}
              src={src}
              alt={`Image ${index + 1}`}
              className="preview__item"
              onClick={onImageClick}
              onLoad={handleImageLoad}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="preview__arrow preview__arrow--right">→</button>
    </section>
  );
}

export default Carousel;
