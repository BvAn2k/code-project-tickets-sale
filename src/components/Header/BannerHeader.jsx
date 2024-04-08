import React from 'react'
import Gallery from './Gallery';

const BannerHeader = () => {

    const img1 = "https://cinestar.com.vn/pictures/c'member.jpg";
    const img2 = "https://cinestar.com.vn/pictures/hssv-340px.jpg";
    const img3 = "https://cinestar.com.vn/pictures/c'monday.jpg";
    const img4 = "https://www.cinestar.com.vn/pictures/H%C3%ACnh%20n%E1%BB%81n%20CTKM/nguoi-vo-cuoi-cung.jpg";
    
    const images = [
        img1, img2, img3, img4
      ];
  return (
<div className=" flex flex-col w-full mt-0">
      <Gallery images={images} />
    </div> )
}

export default BannerHeader