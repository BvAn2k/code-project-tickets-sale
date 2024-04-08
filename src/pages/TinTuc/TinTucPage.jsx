import React from "react";
import Header from "../../components/Header/Header";
import BannerHeader from "../../components/Header/BannerHeader";
import BuyTicketHeader from "../../components/Header/BuyTicketHeader";
import Footer from "../../components/Footer/Footer";
import TinTuc from "../../components/Tintuc/TinTuc";
import SubHeader from "../../components/Header/SubHeader";


const TinTucPage = ()=> {
    return(
        <div>
<Header/>
<SubHeader/>
<BannerHeader/>
<BuyTicketHeader/>
<TinTuc/>
<Footer/>
        </div>
    )
}
export default TinTucPage;