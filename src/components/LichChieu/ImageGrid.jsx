import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className='w-full flex justify-center items-center'>

<div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div className='p-5 rounded-tl-2xl rounded-br-2xl bg-white'>
        <img key={index} src={image.url} alt={image.alt} className="w-full h-full object-cover" />

        </div>
      ))}
    </div>
    </div>
    
  );
};

export default ImageGrid;