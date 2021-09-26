import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
  
  return (
    <div className="home">
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
    
    {/* Product id, title, price, rating, image */}
    <div className="home__row">
    <Product 
    id="1"
    title="
    Apple iPhone 12 Pro Max, 128GB, Gold"
    price={1150.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/71u1BzjGJbL._AC_UY327_FMwebp_QL65_.jpg"
    />
    <Product 
    id="2"
    title="OnePlus Watch - Smartwatch Midnight Black"
    price={179.96}
    rating={5}
    image="https://m.media-amazon.com/images/I/51-PGlCDyTS._AC_UY327_FMwebp_QL65_.jpg"
    />
    </div>

    <div className="home__row">
    <Product 
    id="3"
    title="Sony WH1000XM3 Noise Cancelling Headphones : Wireless Bluetooth Over the Ear Headset – Silver"
    price={348.00}
    rating={5}
    image="https://m.media-amazon.com/images/I/51mPLqxRWvL._AC_UL480_FMwebp_QL65_.jpg"
    />
    <Product 
    id="4"
    title="
    Roll over image to zoom in VIDEO Laura Ashley Home - Charlotte Collection - Luxury Ultra Soft Comforter"
    price={251.96}
    rating={5}
    image="https://m.media-amazon.com/images/I/A1kFVCaVUOL._AC_UL480_FMwebp_QL65_.jpg"
    />
    <Product 
    id="5"
    title="Superman Mens Logo T-Shirt Navy Heather T-Shirt"
    price={19.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61-NN7qLzjL._AC_UL480_FMwebp_QL65_.jpg"
    />
    </div>
    
    <div className="home__row">
    <Product 
    id="6"
    title="SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)"
    price={179.96}
    rating={5}
    image="https://m.media-amazon.com/images/I/71Ao8Im97TL._AC_UL480_FMwebp_QL65_.jpg"
    />
    </div>
   
    {/* Product */}
    </div>
  )
}

export default Home

