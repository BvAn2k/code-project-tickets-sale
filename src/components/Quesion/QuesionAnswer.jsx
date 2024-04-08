import React from "react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const QuesionAnswer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  const handleButtonClick2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const handleButtonClick3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const handleButtonClick4 = () => {
    setIsExpanded4(!isExpanded4);
  };
  const handleButtonClick5 = () => {
    setIsExpanded5(!isExpanded5);
  };
  const handleButtonClick6 = () => {
    setIsExpanded6(!isExpanded6);
  };
  const handleButtonClick7 = () => {
    setIsExpanded7(!isExpanded7);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-center flex justify-center text-white ">
        <h1>HOI VA DAP</h1>
      </div>

      <div className="flex flex-col h-[auto] w-[80%]  ">
        <div className=" flex flex-row  h-[80px] w-[80%] justify justify-between rounded rounded-tr-3xl ml-auto mr-auto rounded-bl-3xl  text-white text-center  bg-[#482b4b] mb-3   hover:bg-[#e00d7a] text-white ">
          <h2 className="font-bold mt-auto mb-auto ml-4 ">
            01 Làm thế nào để mua vé oneline?
          </h2>

          <button
            className=" text-white font-bold py-2 px-4"
            onClick={handleButtonClick}
          >
            {isExpanded ? (
              <span>
                <FaArrowDown className="inline-block mr-2" />
              </span>
            ) : (
              <span>
                <FaArrowRight className="inline-block mr-2" />
              </span>
            )}
          </button>
        </div>
        {isExpanded && (
          <div className="bg-gray-200 p-4 mt-4 w-[70%] rounded-2xl m-auto">
            <p className="flex justify-center">HƯỚNG DẪN MUA VÉ ONLINE</p>
            <p className="flex justify-center">Điều kiện:</p>
            <p>- Bạn phải là thành viên Cinestar</p>
            <p>
              - Nếu không là thành viên vui lòng đăng ký thành viên trên website
              để được mua vé
            </p>
            <p className="flex justify-center">Bước 2:</p>
            <p>Đăng nhập tài khoản thành viên</p>
            <p>Đăng nhập</p>
            <p>Trường hợp khách hàng đăng nhập không được vui lòng liên hệ:</p>
            <p>- Rạp Cinestar QT:</p>
            <p>- Rạp Cinestar Hai bà Trưng:</p>
            <p>- Rạp Cinestar Đà Lạt:</p>
            <p className="flex justify-center">Bước 3:</p>
            <p>- Chọn loại vé và số lượng:</p>
            <p className="flex justify-center">Bước 4:</p>
            <p>Chọn ghế:</p>
            <p>Chọn thức ăn:</p>
            <p className="flex justify-center">Bước 5:</p>
            <p>- Đồng ý.</p>
            <p>- Đồng ý các điều khoản</p>
            <p>- Chọn loại thẻ thanh toán.</p>
            <p>- Thanh toán.</p>
            <p className="flex justify-center">
              B6: Nhập thông tin tài khoản để thanh toán việc mua online.{" "}
            </p>
            <p className="flex justify-center">HOÀN TẤT</p>
          </div>
        )}
      </div>
      <div className="flex flex-col h-[auto] w-[80%]">
      <div className="flex flex-row bg-[#482b4b] mb-3 justify justify-between items-center hover:bg-[#e00d7a] text-white  h-[80px] w-[80%] rounded rounded-tr-3xl ml-auto mr-auto rounded-bl-3xl ">
     
     <h4 className="text-white font-bold ml-3">02 Thủ tục đặt vé oneline phương thức như thế nào  </h4>
    <button className="" onClick={handleButtonClick2}>
{isExpanded2? (
           <span>
             <FaArrowDown className="inline-block mr-2" />
           </span>
         ):(<span>
           <FaArrowRight className="inline-block mr-2" />
         </span>)}
    </button>
   </div>
      {isExpanded2&&(
        <div className="bg-gray-200 p-4 mt-4 w-[80%] rounded-2xl m-auto flex flex-row justify-center">
        <h1 className="text-orange-400 font-light font-serif text-center m-auto">Trả Lời </h1>
        <div className="flex flex-col ml-3">
          <p>Cach dat ve </p>
          <p>1/ Đặt vé oneline trên mục MUA VÉ ONELINE trên trang chủ cinestar</p>
          <p>2/chọn phim ,rạp , ngày và suất chiếu </p>
          <p>3/ Bạn chọn vị tri , nhập thông tin liên hệ </p>
          <p>4/ Ban chọn phương thức thanh toán </p>
          <p>5/ Sau khi hoàn tất thanh toán hệ thông sẽ gửi vé đến thông tin liên hệ của bạn . xin vui long xuất vé khi đến rạp</p>
          <p>CHÚC BẠN THÀNH CÔNG</p>

        </div>
      </div>
       )}
      </div>
      <div className="flex flex-col h-[auto] w-[80%]">
      <div className="flex flex-row bg-[#482b4b] mb-3 justify justify-between items-center hover:bg-[#e00d7a] text-white  h-[80px] w-[80%] rounded rounded-tr-3xl ml-auto mr-auto rounded-bl-3xl ">
     
     <h4 className="text-white font-bold ml-3">03 Làm sao để được câp thẻ thành viên? </h4>
    <button className="" onClick={handleButtonClick3}>
{isExpanded3? (
           <span>
             <FaArrowDown className="inline-block mr-2" />
           </span>
         ):(<span>
           <FaArrowRight className="inline-block mr-2" />
         </span>)}
    </button>
   </div>
      {isExpanded3&&(
        <div className="bg-gray-200 p-4 mt-4 w-[80%] rounded-2xl m-auto flex flex-row">
        <h1 className="text-orange-400 font-light font-serif">Trả Lời </h1>
        <div className="flex flex-col">
          <h3>Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo thẻ C'Friend và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau</h3>
          <h3>khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</h3>
        </div>
      </div>
       )}
      </div>
      
      <div className="flex flex-col h-[auto] w-[80%]">
      <div className="flex flex-row bg-[#482b4b] mb-3 justify justify-between items-center hover:bg-[#e00d7a] text-white  h-[80px] w-[80%] rounded rounded-tr-3xl ml-auto mr-auto rounded-bl-3xl ">
     
     <h4 className="text-white font-bold ml-3">04 Lợi ích khi tham gia thẻ thành viên là gì ? </h4>
    <button className="" onClick={handleButtonClick4}>
{isExpanded4? (
           <span>
             <FaArrowDown className="inline-block mr-2" />
           </span>
         ):(<span>
           <FaArrowRight className="inline-block mr-2" />
         </span>)}
    </button>
   </div>
      {isExpanded4&&(
        <div className="bg-gray-200 p-4 mt-4 w-[80%] rounded-2xl m-auto flex flex-row">
        <h1 className="text-orange-400 font-light font-serif">Trả Lời </h1>
        <div className="flex flex-col">
          <h3>Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo thẻ C'Friend và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau</h3>
          <h3>khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</h3>
        </div>
      </div>
       )}
      </div>
      <div className="flex flex-col h-[auto] w-[80%]">
      <div className="flex flex-row bg-[#482b4b] mb-3 justify justify-between items-center hover:bg-[#e00d7a] text-white  h-[80px] w-[80%] rounded rounded-tr-3xl ml-auto mr-auto rounded-bl-3xl ">
     
     <h4 className="text-white font-bold ml-3">05 Làm sao để biết được số điểm tich lũy ? </h4>
    <button className="" onClick={handleButtonClick5}>
{isExpanded5? (
           <span>
             <FaArrowDown className="inline-block mr-2" />
           </span>
         ):(<span>
           <FaArrowRight className="inline-block mr-2" />
         </span>)}
    </button>
   </div>
      {isExpanded5&&(
        <div className="bg-gray-200 p-4 mt-4 w-[80%] rounded-2xl m-auto flex flex-row">
        <h1 className="text-orange-400 font-light font-serif">Trả Lời </h1>
        <div className="flex flex-col">
          <h3>Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo thẻ C'Friend và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau</h3>
          <h3>khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</h3>
        </div>
      </div>
       )}
      </div>
      <div className="flex flex-col h-[auto] w-[80%]">
      <div className="flex flex-row bg-[#482b4b] mb-3 justify justify-between items-center hover:bg-[#e00d7a] text-white  h-[80px] w-[80%] rounded rounded-tr-3xl ml-auto mr-auto rounded-bl-3xl ">
     
     <h4 className="text-white font-bold ml-3">06 Làm sao để đăng nhâp vào Website khi đã có thẻ C"Friend? </h4>
    <button className="" onClick={handleButtonClick6}>
{isExpanded6? (
           <span>
             <FaArrowDown className="inline-block mr-2" />
           </span>
         ):(<span>
           <FaArrowRight className="inline-block mr-2" />
         </span>)}
    </button>
   </div>
      {isExpanded6&&(
        <div className="bg-gray-200 p-4 mt-4 w-[80%] rounded-2xl m-auto flex flex-row">
        <h1 className="text-orange-400 font-light font-serif">Trả Lời </h1>
        <div className="flex flex-col">
          <h3>Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo thẻ C'Friend và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau</h3>
          <h3>khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</h3>
        </div>
      </div>
       )}
      </div>
      <div className="flex flex-col h-[auto] w-[80%]">
      <div className="flex flex-row bg-[#482b4b] mb-3 justify justify-between items-center hover:bg-[#e00d7a] text-white  h-[80px] w-[80%] rounded rounded-tr-3xl ml-auto mr-auto rounded-bl-3xl ">
     
     <h4 className="text-white font-bold ml-3">07 Doybo Atoms là gì ? </h4>
    <button className="" onClick={handleButtonClick7}>
{isExpanded7? (
           <span>
             <FaArrowDown className="inline-block mr-2" />
           </span>
         ):(<span>
           <FaArrowRight className="inline-block mr-2" />
         </span>)}
    </button>
   </div>
      {isExpanded7&&(
        <div className="bg-gray-200 p-4 mt-4 w-[80%] rounded-2xl m-auto flex flex-row">
        <h1 className="text-orange-400 font-light font-serif">Trả Lời </h1>
        <div className="flex flex-col">
          <h3>Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp Cinestar là đã có thể tạo thẻ C'Friend và thẻ chỉ có giá trị sử dụng từ lần giao dịch sau</h3>
          <h3>khi bạn tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên thẻ C'vip</h3>
        </div>
      </div>
       )}
      </div>
    </div>
  );
};
export default QuesionAnswer;
