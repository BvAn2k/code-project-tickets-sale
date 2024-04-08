import React, { useState } from "react";
import ListItem from "./ListItem";
import ImageGrid from "./ImageGrid";

const LichChieu = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const movies = [
    "Movie 1",
    "Movie 2",
    "Movie 3",
    // Add more movie options as needed
  ];

  const dates = [
    "Date 1",
    "Date 2",
    "Date 3",
    // Add more date options as needed
  ];
  const items = [
    { imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/11-2023/chiem-doat-poster.jpg', text: 'CHIẾM ĐOẠT' },
    { imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/11-2023/chiem-doat-poster.jpg', text: 'VONG ÁM' },
    { imageUrl: 'https://cinestar.com.vn/pictures/Cinestar/11-2023/chiem-doat-poster.jpg', text: 'ÂM HỒN TỬ ĐỊA' },
  ];

  const url2 = "https://www.cinestar.com.vn/pictures/H%C3%ACnh%20n%E1%BB%81n%20CTKM/c'member.jpg";
  const images = [
    { url: 'https://www.cinestar.com.vn/pictures/c_monday.jpg', alt: 'Image 1' },
    { url: url2, alt: 'Image 2' },
    { url: "https://www.cinestar.com.vn/pictures/H%C3%ACnh%20n%E1%BB%81n%20CTKM/c'member.jpg", alt: 'Image 3' },
    // Add more image objects as needed
  ];
  return (
    <div className="w-full bg-[#45003D] h-auto flex flex-col">
      <div className="h-[300px] flex flex-row sm:flex-col md:flex-col lg:flex-row">
        <div className="w-1/3 flex flex-col text-white items-center">
          <p className="font-bold text-3xl mt-8">HỆ THỐNG RẠP</p>

          <div className="w-1/2 flex flex-col mt-2">
            <select
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
              className="h-12 rounded-bl-3xl bg-black hover:bg-pink-600 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- CHỌN PHIM --</option>
              {movies.map((movie, index) => (
                <option key={index} value={movie.toUpperCase()}>
                  {movie.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="h-12  rounded-tl-3xl bg-black hover:bg-pink-600 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- CHỌN NGÀY --</option>
              {dates.map((date, index) => (
                <option key={index} value={date.toUpperCase()}>
                  {date.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-2/3 text-white flex flex-col">
          <img
            className="w-[195px] h-[81px] mt-8"
            src="https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png"
            alt="logo-cine-star"
          />
          <p>
            271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí
            Minh
          </p>
          <p>Đặt vé: 028 7300 8881</p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center">
      {items.map((item, index) => (
        <ListItem key={index} imageUrl={item.imageUrl} text={item.text} />
      ))}
    </div>
    <ImageGrid images={images} />
    
    </div>
  );
};

export default LichChieu;
