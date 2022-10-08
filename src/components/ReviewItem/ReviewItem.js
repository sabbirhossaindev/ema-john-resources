import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product }) => {
    const {name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>price: ${price}</small></p>
                    <p><small>shipping: ${shipping}</small></p>
                    <p><small>Quantity: ${quantity}</small></p>
                </div>
            </div>
            <div className='delete-container'>
                <div>
                    <button className='btn-delete'>
                        hh
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;