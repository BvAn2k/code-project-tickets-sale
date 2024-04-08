import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover h-[350px] w-full"
    />
  );
};

export default Image;
