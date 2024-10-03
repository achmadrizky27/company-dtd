import React, { useState, useEffect } from "react";

const ImageSliderComponent = ({ images, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return <div className="flex items-center justify-center w-full">{images.length > 0 && <img src={images[currentIndex]} alt={`pic-${currentIndex + 1}`} className="border p-2 rounded-md w-auto lg:w-56" />}</div>;
};

export default ImageSliderComponent;
