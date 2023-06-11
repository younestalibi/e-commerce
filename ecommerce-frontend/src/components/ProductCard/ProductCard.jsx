import React from 'react';
import './ProductCard.css';
import image from '../../assets/img.png'
const ProductCard = (props) => {
const {product}=props
  return (
    <div className="product-card">
      <img src={`${import.meta.env.VITE_SERVER_URL}/storage/${product.images[0].image_path}`} alt={'product.title'} className="product-image" />
      <div>
      <h2 className="product-title">{product.name}</h2>
      <div className='product-card-footer'>
        <div className="product-prices">  
          <div className="old-price">${parseFloat(product.price).toFixed(2)}</div>
          <div className="current-price">${parseFloat(product.price).toFixed(2)}</div>
        </div>
        <div className='add-to-cart-butto'>
          +Add to Basket
        </div>
      </div>
      </div>
      {/* <button className="add-to-cart-button">Add to cart</button> */}
    </div>
  );
};

export default ProductCard;
