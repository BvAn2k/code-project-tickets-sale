import React from 'react'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/Header/SubHeader'
import BannerHeader from '../../components/Header/BannerHeader'
import BuyTicketHeader from '../../components/Header/BuyTicketHeader'
import LichChieu from '../../components/LichChieu/LichChieu'
import Footer from '../../components/Footer/Footer'





const LichChieuPage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>

        <Header menu = "tab2"/>
        <SubHeader/>
        <BannerHeader/>
        <BuyTicketHeader/>
        <LichChieu/>
        <Footer/>
       
       

    </div>
  )
}

export default LichChieuPage