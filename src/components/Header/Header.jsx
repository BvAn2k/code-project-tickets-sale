/* eslint-disable no-template-curly-in-string */
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  function gotoLichChieu (){
    navigate("/lichchieu");
  }
  function gotoHome(){
    navigate("/")
  }
  function gotoQuesion (){
    navigate("/Quesion");
  }
  function gotoTinTuc (){
    navigate("/tintuc");
  }
 

  const tab = props.menu;
  const styleMenu1 = tab === "tab1"?"bg-orange-500":"bg-[#E00D7A]";
  const styleMenu2 = tab === "tab2"?"bg-orange-500":"bg-[#E00D7A]";
  const styleMenu3 = tab === "tab3"?"bg-orange-500":"bg-[#E00D7A]";
  const styleMenu4 = tab === "tab4"?"bg-orange-500":"bg-[#E00D7A]";
  const styleMenu5 = tab === "tab5"?"bg-orange-500":"bg-[#E00D7A]";
  const styleMenu6 = tab === "tab6"?"bg-orange-500":"bg-[#E00D7A]";
  const styleMenu7 = tab === "tab7"?"bg-orange-500":"bg-[#E00D7A]";
  const styleMenu8 = tab === "tab8"?"bg-orange-500":"bg-[#E00D7A]";


  return (
    <div className="w-full h-[130px] bg-[#4F0046] flex flex-row">
      <div className="w-[30%] flex flex-row justify-center items-center">
        <img
          className="w-[195px] h-[81px]"
          src="https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png"
          alt="logo-cine-star"
        />
      </div>

      <div className="w-[70%]  flex flex-col  ">
        <div className="h-[50%] flex  items-center justify-end p-5 mr-5">
          <div className="flex text-white h-[50px] flex-row  rounded-3xl shadow-lg p-4 bg-[#21001A]">
            <input
              type="text"
              placeholder="Search"
              className=" bg-transparent border-transparent rounded-md px-4 py-2 mr-2 focus:outline-none"
            />
            <FaSearch size={24} color="white" />
          </div>

          <div className=" ml-8 text-white font-bold w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#771A4B]">
            <p>EN</p>
          </div>
        </div>

        <div className="h-[50%]  flex items-center">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-orange-400">
            <FaHome size={32} color="white" />
          </div>

          <div className="bg-[#E00D7A] border-4 border-black w-[90%] ml-5 rounded-3xl  
          h-[50px] flex flex-row items-center text-white font-bold">

            <div onClick={()=>gotoHome()} className={`flex items-center justify-center rounded-tl-3xl rounded-bl-3xl w-[10%]  h-full ${styleMenu1} hover:bg-orange-500`}>
              <p>MOVIES</p>
               
            </div>

            <div onClick={()=>gotoLichChieu()} className={`h-full ${styleMenu2} hover:bg-orange-500 flex items-center 
            justify-center   w-[12%]`}>
              <p>SHOWTIME</p>
               
            </div>
            <div className={`h-full ${styleMenu3} hover:bg-orange-500 flex items-center 
            justify-center  w-[18%]`}>
              <p>TICKET&THREATEN</p>
               
            </div>
            <div className={`h-full ${styleMenu4} hover:bg-orange-500 flex items-center 
            justify-center  w-[15%]`}>
              <p>PROMOTIONS</p>
               
            </div>
            <div onClick={()=>gotoQuesion()} className={`h-full ${styleMenu5} hover:bg-orange-500  flex items-center 
            justify-center  w-[10%]`}>
              <p>FAQS</p>
               
            </div>
            <div onClick={()=>gotoTinTuc()} className={`h-full ${styleMenu6} hover:bg-orange-500 flex items-center 
            justify-center  w-[10%]`}>
              <p>C'NEWS</p>
               
            </div>
            <div className={`h-full ${styleMenu7} hover:bg-orange-500 flex items-center 
            justify-center  w-[11%]`}>
              <p>SERVICES</p>
               
            </div>
            <div className={`${styleMenu8} hover:bg-orange-500 flex items-center 
            justify-center  w-[14%] h-full rounded-tr-3xl rounded-br-3xl`}>
              <p>CONNECT</p>
               
            </div>
            
          </div>

          {/* <nav className="bg-[#E00D7A]  ml-5 rounded-3xl p-3 h-[50px] flex items-center text-white font-bold">
            <ul className="flex h-full">
              <li className="mr-4">
                <a
                  href="#"
                  className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-md"
                >
                  PHIM
                </a>
              </li>
              <li className="mr-4">
                <a href="#">LỊCH CHIẾU</a>
              </li>
              <li className="mr-4">
                <a href="#">RẠP VÀ GIÁ</a>
              </li>
              <li className="mr-4">
                <a href="#">KHUYẾN MÃI</a>
              </li>
              <li className="mr-4">
                <a href="#">HỎI VÀ ĐÁP</a>
              </li>
              <li className="mr-4">
                <a href="#">TIN TỨC</a>
              </li>
              <li className="mr-4">
                <a href="#">GIỚI THIỆU</a>
              </li>
              <li>
                <a href="#">LIÊN HỆ</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
