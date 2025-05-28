import React, { useState, useEffect } from 'react';
import '../styles/YearSlideshow.css';

const YearSlideshow = ({ images, videos = [], 'aria-label': ariaLabel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allMedia = [...images, ...videos];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allMedia.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [allMedia.length]);

  const getMediaIndex = (offset) => {
    const index = (currentIndex + offset + allMedia.length) % allMedia.length;
    return index;
  };

  const renderMedia = (media, index) => {
    if (typeof media === 'string') {
      // Handle video URLs
      return (
        <video
          className="slideshow-image"
          src={media}
          muted
          loop
          playsInline
          autoPlay
          aria-label={`Video ${index + 1} of ${allMedia.length}`}
          role="img"
        />
      );
    }
    
    // Handle image objects with metadata
    return (
      <div
        className="slideshow-image"
        style={{ backgroundImage: `url(${media.src})` }}
        role="img"
        aria-label={media.alt}
      >
        <img
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          style={{ display: 'none' }}
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <div 
      className="year-slideshow"
      role="region"
      aria-label={ariaLabel || "Achievements slideshow"}
    >
      <div className="slideshow-container">
        {/* Left card */}
        <div 
          className="slideshow-card left"
          role="presentation"
          aria-hidden="true"
        >
          {renderMedia(allMedia[getMediaIndex(-1)], getMediaIndex(-1))}
        </div>
        
        {/* Center card */}
        <div 
          className="slideshow-card center"
          role="presentation"
        >
          {renderMedia(allMedia[currentIndex], currentIndex)}
        </div>
        
        {/* Right card */}
        <div 
          className="slideshow-card right"
          role="presentation"
          aria-hidden="true"
        >
          {renderMedia(allMedia[getMediaIndex(1)], getMediaIndex(1))}
        </div>
      </div>
    </div>
  );
};

export default YearSlideshow; 