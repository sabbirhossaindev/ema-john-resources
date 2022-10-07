import { getStoredCart } from "../utilities/fakedb";

// get products
export const productAndCartLoader = async () => {
   const productsData = await fetch('product.json');
    const products = await productsData.json();

    // get Cart
    const savedCart = getStoredCart();
    const previousCart = [];

    for (const id in savedCart) {
        const addProduct = products.find(product => product.id === id);
        if (addProduct) {
            const quantity = savedCart[id];
            addProduct.quantity = quantity;
            previousCart.push(addProduct);
        }
    }
    return ({ products, previousCart });
}

