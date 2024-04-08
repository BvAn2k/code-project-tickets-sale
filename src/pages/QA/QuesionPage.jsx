import React, { useState } from "react";
import QuesionAnswer from "../../components/Quesion/QuesionAnswer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubHeader from "../../components/Header/SubHeader";
import BuyTicketHeader from "../../components/Header/BuyTicketHeader";
import BannerHeader from "../../components/Header/BannerHeader";
const QuestionPage = () => {
  
  return (
   <div>
<Header/>
<SubHeader/>
<BannerHeader/>
<BuyTicketHeader/>
<QuesionAnswer/>
<Footer/>
   </div>
    
  );
};

export default QuestionPage;
