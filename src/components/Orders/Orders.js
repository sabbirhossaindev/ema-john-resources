import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2>This is order compo: {products.length}</h2>
        </div>
    );
};

export default Orders;