import React from 'react';
import './Product.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from "./StateProvider";

function Product({id, title, price, rating, image}) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">

        <div className="info">
            <p>{title}</p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon/>
            ))}
            </div>
        </div>

        <img
            src={image}
            alt="product_image"
        />
        
        <button
        onClick={addToBasket} 
        className="button">Add to Basket</button>

    </div>
  )
}

export default Product;