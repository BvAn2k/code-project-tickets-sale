import React from "react";

const ListItem = ({ imageUrl, text }) => {
  const data = [
    { id: 1, text: "19:05" },
    { id: 2, text: "10:15" },
    { id: 3, text: "09:10" },
    { id: 4, text: "11:20" },
    { id: 5, text: "23:10" },
  ];

  const divStyle = {
    background: 'linear-gradient(to bottom right, rgba(245, 197, 73,1) 0%, rgba(245, 197, 73,1) 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
  };
  return (
    <div className="flex w-full flex-row mb-5 sm:flex-col md:flex-col lg:flex-row">
      <div className="w-[10%]"></div>
      <div className="w-[80%] flex flex-row items-center">
        <div className="w-[60%] h-[350px] bg-[#F18720] items-center flex flex-row sm:flex-col md:flex-col lg:flex-row">
          <img
            src={imageUrl}
            alt="Item"
            className="border-white box-border border-[5px] -ml-8 w-[200px] h-[300px]"
          />

          <div className="flex flex-col ml-5 mr-5 text-white">
            <p className="text-xl font-bold">{text}</p>
            <p>
              Kể về người vợ của một gia đình thượng lưu thuê cô bảo mẫu “trong
              mơ” để chăm sóc con trai mình. Nhưng cô không ngờ rằng, phía sau
              sự trong sáng, tinh khiết kia, cô bảo mẫu luôn che giấu âm mưu
              nhằm phá hoại hạnh phúc gia đình và khiến cuộc sống của cô thay
              đổi mãi mãi.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row bg-[#521B4B] h-[80px] sm:flex-col md:flex-col lg:flex-row">
          <div className="w-[120px]  flex  items-center  h-[80px] bg-[#F5C549] ">
            <div className="w-[90px] flex justify-center items-center">
            <p className="text-black font-bold text-xs">20/11/2023</p>

            </div>
            <div class="relative w-[30px] h-full ">
              <div class="absolute w-full h-full bg-[#521B4B]"> 
              </div>
              <div
                class="absolute w-full h-full z-10"
                style={divStyle}
              ></div>
            </div>
            {/* <p className="text-black font-bold text-xl">20/11/2023</p> */}
          </div>
          <div className="w-full ml-6 flex flex-row bg-[#521B4B] h-[80px] sm:flex-col md:flex-col lg:flex-row">
            {data.map((item) => (
              <div
                className="box flex justify-center mt-2 mb-2 items-center font-bold text-white w-[60px] bg-pink-600 ml-1 "
                key={item.id}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[10%]"></div>
    </div>
  );
};

export default ListItem;
