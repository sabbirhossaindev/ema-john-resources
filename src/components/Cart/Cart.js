import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4 className='text-xl text-white text-center mt-3'>Order summery</h4>
            <hr className='hr mt-2'/>
            <h5 className='mt-4'>Selected Items: {quantity}</h5>
            <p className='mt-1'>Price: ${total}</p>
            <p className='mt-1'>Shipping: ${shipping}</p>
            <p className='mt-1'>Tax: {tax}</p>
            <hr className='hr mt-3'/>
            <h5 className='text-gray-900 mt-1'>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;