/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import buttonBackgroundImage from "../../assets/icon_star.png";
const GalleryImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg",
    "https://cinestar.com.vn/pictures/Cinestar/10-2023/poster-dat-rung-phuong-nam.jpg",
    "https://cinestar.com.vn/pictures/Cinestar/11-2023/nguoi-cha-cua-xe-lua-dai-ngan-ha.jpg",
    "https://cinestar.com.vn/pictures/Cinestar/10-2023/poster-dat-rung-phuong-nam.jpg",
    // 'https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg',
    // 'https://cinestar.com.vn/pictures/Cinestar/10-2023/poster-dat-rung-phuong-nam.jpg',
    // 'https://cinestar.com.vn/pictures/Cinestar/11-2023/nguoi-cha-cua-xe-lua-dai-ngan-ha.jpg',
    // 'https://cinestar.com.vn/pictures/Cinestar/10-2023/poster-dat-rung-phuong-nam.jpg',

    // Add more image URLs here
  ];
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex w-full  items-center flex-row justify-center">
      <button
        className="w-12 h-12 rounded-full bg-button-background bg-cover bg-center"
        style={{ backgroundImage: `url(${buttonBackgroundImage})` }}
      >
        {""}
      </button>
      <div className="flex w-[70%] overflow-x-auto">
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt, react/jsx-no-comment-textnodes
          <div className=" w-[25%] h-4/5 max-w-xs flex flex-col justify-center">
            <img className="w-full h-full"
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
            />
            <p className="text-center">THE LAST WIFE</p>
          </div>
        ))}
      </div>
      <button
        className="w-12 h-12 rounded-full bg-button-background bg-cover bg-center"
        style={{ backgroundImage: `url(${buttonBackgroundImage})` }}
      >
        {""}
      </button>
    </div>
  );
};

export default GalleryImage;
