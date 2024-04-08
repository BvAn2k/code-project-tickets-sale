import React from "react";

const SubHeader = () => {
  return (
    <div className="bg-gray-200 w-full h-[60px] flex flex-row justify-center items-center">
      <div
        className="w-[80%] text-xs font-bold text-[#E00D7A]  h-[60px] 
        flex flex-row justify-between items-center"
      >
        <div className="w-[500px] h-full  flex flex-row items-center">
          <img
            className="w-[70px] h-[70px]"
            src="https://png.pngtree.com/png-vector/20230227/ourmid/pngtree-golden-ticket-png-image_6621563.png"
            alt="ticket"
          />

          <p>ĐĂNG KÝ THÀNH VIÊN</p>

          <img
            className="w-[40px] h-[40px] ml-5"
            src="https://www.pinclipart.com/picdir/big/122-1228082_pink-cup-orange-cup-clipart-png-download.png"
            alt="ticket"
          />

          <p className="ml-2">ĐĂNG NHẬP</p>
        </div>
        <div className="hover:cursor-pointer w-[200px] h-full  flex flex-row items-center">

        <img
            className="w-[40px] h-[40px] ml-5"
            src="https://cdn-icons-png.flaticon.com/512/4059/4059257.png"
            alt="phone call"
          />

          <p className="ml-2">028 7300 8881</p>

        </div>
      </div>
    </div>
  );
};

export default SubHeader;
