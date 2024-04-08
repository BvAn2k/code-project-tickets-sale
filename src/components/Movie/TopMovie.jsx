import React from "react";
import GalleryImage from "./GalleryImage";

const TopMovie = () => {
  return (
    <div className="text-white font-bold w-full h-[760px] mt-0 flex flex-col justify-center">
      <div className="h-1/3 bg-[#420038] flex justify-center">
        <div className="flex flex-row justify-center items-end w-[60%]">
          {/* <button className="w-1/3 z-10 h-[25%] bg-blue-500 text-white   rounded-md">
              Button 1
            </button>
            <button className="w-1/3  z-2 h-[25%] -ml-5 -mr-5 bg-red-500 text-white  rounded-md ">
              Button 2
            </button>

            <button className="w-1/3 z-8 h-[25%] z-10 -ml-5 bg-green-500 text-white  rounded-md ">
              Button 3
            </button> */}

          <div className="text-3xl font-medium relative w-full h-full items-end mb-1">
            <div className="absolute inset-0 flex items-end justify-center">
              {/* Content to be centered */}

              <div className="hover:cursor-pointer hover:bg-yellow-500 border-gray-400 border-1 flex items-center justify-center shadow-xl shadow-gray-200 hover:shadow-md focus:shadow-lg text-black   rounded-tl-3xl rounded-tr-3xl rounded-br-3xl absolute z-30 w-1/3 mr-[520px] h-[25%] bg-yellow-500">
              <p className="text-center">NOW SHOWING</p>
              </div>
              <div className="hover:cursor-pointer hover:bg-yellow-500 border-gray-400 border-1 flex items-center justify-center shadow-xl shadow-gray-200 hover:shadow-md focus:shadow-lg text-white   rounded-3xl absolute z-20 w-1/3  h-[25%] bg-orange-500">
              <p className="text-center">COMING SOON</p>
              </div>
              <div className="hover:cursor-pointer hover:bg-yellow-500 border-gray-400 border-1 flex items-center justify-center shadow-xl shadow-gray-200 hover:shadow-md focus:shadow-lg text-white   rounded-tr-3xl absolute z-10 w-1/3 ml-[520px] h-[25%] bg-orange-500">
              <p className="text-center">SNEAK SHOWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60%] bg-[#F18720] flex justify-center">

              <GalleryImage/>
      </div>
    </div>
  );
};

export default TopMovie;
