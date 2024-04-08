import React, { useEffect, useState } from 'react';
import Image from './Image';

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];
  // [currentImage, setCurrentImage] = images[currentImageIndex];
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [images.length]);

  // //

  const previous = "<";
  const next = ">";
  return (
    <div className="relative flex items-center justify-center h-[350px] w-full">
      <button
        className="text-2xl w-[40px] h-[40px] bg-pink-600 text-white absolute left-5  rounded-full "
        onClick={goToPreviousImage}
      >
        {previous}
      </button>
      <Image src={currentImage} alt="Image Slide" />
      <button
        className="text-2xl w-[40px] h-[40px] bg-pink-600 text-white absolute right-5   rounded-full "
        onClick={goToNextImage}
      >
        {next}
      </button>
    </div>
  );
};

export default Gallery;
