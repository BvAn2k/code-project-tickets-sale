import React, { useState } from "react";

const BuyTicketHeader = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const movies = [
    "Movie 1",
    "Movie 2",
    "Movie 3",
    // Add more movie options as needed
  ];

  const cinemas = [
    "Cinema 1",
    "Cinema 2",
    "Cinema 3",
    // Add more cinema options as needed
  ];

  const dates = [
    "Date 1",
    "Date 2",
    "Date 3",
    // Add more date options as needed
  ];

  const times = [
    "Time 1",
    "Time 2",
    "Time 3",
    // Add more time options as needed
  ];
  return (
    <div className="bg-[#E5E7EB] text-white font-bold w-full h-[180px] mt-0 flex flex-row justify-center">
      <div className="w-[40%] mb-5 rounded-2xl  p-2 h-[180px] flex flex-row justify-center items-center">
        <div className="w-1/2 flex flex-col">
          <select
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            className="h-12 rounded-bl-3xl bg-[#3E3E3E] hover:bg-pink-600 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="h-12  rounded-tl-3xl bg-[#3E3E3E] hover:bg-pink-600 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- CHỌN NGÀY --</option>
            {dates.map((date, index) => (
              <option key={index} value={date.toUpperCase()}>
                {date.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/2 ml-5 flex flex-col">
          <select
            value={selectedCinema}
            onChange={(e) => setSelectedCinema(e.target.value)}
            className="h-12 rounded-br-3xl bg-[#3E3E3E] hover:bg-pink-600 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- CHỌN RẠP --</option>
            {cinemas.map((cinema, index) => (
              <option key={index} value={cinema.toUpperCase()}>
                {cinema.toUpperCase()}
              </option>
            ))}
          </select>

          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="h-12  rounded-tr-3xl bg-[#3E3E3E] hover:bg-pink-600 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- CHỌN SUẤT CHIẾU --</option>
            {times.map((time, index) => (
              <option key={index} value={time}>
                {time.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* {selectedMovie && selectedCinema && selectedDate && selectedTime && (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Thông tin đặt vé:</h2>
            <p>Phim: {selectedMovie}</p>
            <p>Rạp: {selectedCinema}</p>
            <p>Ngày: {selectedDate}</p>
            <p>Suất chiếu: {selectedTime}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default BuyTicketHeader;
