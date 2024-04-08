import React from "react";

const TinTuc = () => {
  return (
    <div className=" text-3xl  relative w-[full] h-[auto] flex flex-col mb-1 bg-[#36002e]">
      <div className="ml-[auto] mr-[auto] mt-4  font-medium text-white">
        TIN TUC
      </div>
      <div className="absolute inset-0 flex justify-center h-[auto] font-medium mt-[70px] mb-11">
        <div className="h-[60px] hover:cursor-pointer hover:bg-yellow-500 border-gray-400 border-1 flex items-center justify-center focus:shadow-lg text-black    rounded-tr-3xl rounded-br-3xl rounded-tl-3xl absolute z-20 w-1/5 mr-[200px]  bg-yellow-500">
          <p className="text-center">TIN ĐIẸN ẢNH </p>
        </div>
        <div className="h-[60px] hover:cursor-pointer hover:bg-yellow-500 border-gray-400 border-1 flex items-center justify-center focus:shadow-lg text-white  hover:text-black rounded-3xl absolute z-10 w-1/5   ml-[300px] bg-orange-500">
          <p className="text-center">TUYỂN DỤNG </p>
        </div>
      </div>
<div className="h-[1800px]">
  <div className="absolute flex flex-row  mt-[100px] justify-center h-[auto] w-[full] ml-12">
        <div className="flex flex-col h-[auto]  ml-11 w-[1/3]">
          <div className=" h-[350px] w-[400px] mt-4 bg-[#e2d9e4]  mb-3  hover:bg-[#e00d7a]">
            <div className="flex flex-col w-[370px] m-auto  mt-4 mb-3 bg-white">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.bctbdhCqQXtB-oYG3frE9AHaEK&pid=Api&P=0&h=220"
                alt=""
                className="h-[250px]"
              />
              <h3 className="text-black text-base font-bold">
                Đêm khai mạc liên hoan việt nam đầy ấn tượng{" "}
              </h3>
              <h4 className="text-black text-sm">
                Đêm 29/11/2023 tại phố đi bộ hà nội sẽ diễn ra đêm ca nhạc vơi
                sự tham gia của các ca sĩ nổi tiếng{" "}
              </h4>
            </div>
          </div>
          <div className="bg-blue-500  h-[450px] w-[400px] mt-4">the 2</div>
          <div className="bg-blue-500  h-[400px] w-[400px] mt-4">the 3</div>
        </div>
        <div className=" flex flex-col h-[auto] ml-5 mr-5  w-[1/3]">
          <div className="bg-white  h-[450px] w-[400px] mt-4 hover:bg-[#e00d7a]">
            <div className="flex flex-col bg-white m-auto  w-[365px] mt-4">
<img src="https://th.bing.com/th/id/OIP.OQGlEaZvs95o0dMfDchxDgHaLQ?rs=1&pid=ImgDetMain" alt="dau truong sinh tu" className="h-[300px]"/>
<h4 className="text-black text-sm">Đấu trường sinh tử , khúc hát chim ca và quái vật - Dàn diễn viên thưc lực góp mặt trong tiền chuyên của "đấu trường sinh tử"</h4>
<h5  className="text-black text-sm">Trở lại màn ảnh sau 8 năm . Thương hiệu nổi tiếng phim đấu trường sinh tử sẽ một lần nữa làm mưa làm gió màn ảnh rộng vơí phân tiền quay  </h5>
            </div>
          </div>
          <div className="bg-blue-500  h-[450px] w-[400px] mt-4">the 5</div>
          <div className="bg-blue-500  h-[600px] w-[400px] mt-4">the 6</div>
        </div>
        <div className="flex flex-col h-[auto] mr-11  w-[1/3]">
          <div className="bg-blue-500  h-[300px] w-[400px] mt-4">the 7</div>
          <div className="bg-blue-500  h-[500px] w-[400px] mt-4">the 8</div>
          <div className="bg-blue-500  h-[200px] w-[400px] mt-4 ">the 9</div>
        </div>
      </div>
</div>
    
    </div>
  );
};
export default TinTuc;
