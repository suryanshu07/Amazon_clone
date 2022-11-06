import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img
                className="checkout__ad"
                src="https://adexchanger.com/wp-content/uploads/2018/02/shutterstock_376692970.jpg"
                alt="banner"
            />
            <div>
              <h2 className="checkout__title">Your shopping Basket</h2>
            
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            
            </div>
        </div>

        <div className="checkout__right">
          <Subtotal/>
        </div>

    </div>
  )
}

export default Checkout;
