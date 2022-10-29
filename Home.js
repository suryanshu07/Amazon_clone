import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        
        <div className="container">
            <img
            className="image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

        <div className="row">
            <Product id="7890" title="The lean startup" price={29.99}
            image="https://cdn01.sapnaonline.com/product_media/9780670921607/md_9780670921607.jpg" rating={3}/>
            
            <Product id="8901" title="Gourmet Popcorn" price={12.99} 
            image="https://m.media-amazon.com/images/I/7195mf3M3dL._SL1500_.jpg" rating={4}/>
        </div>

        <div className="row">
            <Product id="1234" title="Dark Chocolate" price={9.99} image="http://cdn.shopify.com/s/files/1/0173/7644/4470/products/FABELLEGANACHERB_8901725102975_2_e4bd655a-0ca2-4666-9e25-b0c3688fa803_grande.jpg?v=1634402141" rating={4}/>
            <Product id="2345" title="Dessert" price={9.99} image="https://i.pinimg.com/originals/be/a2/a4/bea2a4c90a6bd0ec65ef132dc71fd9ab.jpg" rating={4}/>
            <Product id="3456" title="Cake" price={2.99} image="https://assets.rbl.ms/21692258/origin.jpg" rating={3}/>
        </div>

        <div className="row">
            <Product id="4567" title="Laptop" price={79.99} image="https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png" rating={4}/>
        </div>

      </div>
    </div>
  )
}

export default Home;