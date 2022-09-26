import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { category, img, name, price, seller, ratings, } = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='text-lg'>{ name}</p>
                <p>Price: $ {price}</p>
                <p><small>Category: {category}</small></p>
                <p><small>Seller: {seller}</small></p>
                <strong>Ratings: {ratings}</strong>
            </div>
            <div>
                <button onClick={() => handleAddToCart(product)} className="btn btn-secondary btn-cart w-100">Add To Cart <i class="fa-sharp fa-solid fa-cart-plus"></i></button>
            </div>
            
        </div>
    );
};

export default Product;