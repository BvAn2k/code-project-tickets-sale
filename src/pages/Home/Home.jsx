import React from 'react'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/Header/SubHeader'
import BannerHeader from '../../components/Header/BannerHeader'
import BuyTicketHeader from '../../components/Header/BuyTicketHeader'
import TopMovie from '../../components/Movie/TopMovie'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center'>

        <Header menu = "tab0" />
        <SubHeader/>
        <BannerHeader/>
        <BuyTicketHeader/>
        <TopMovie/>
        <Footer/>

    </div>
  )
}

export default Home