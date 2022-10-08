import { getStoredCart } from "../utilities/fakedb";

// get products
export const productAndCartLoader = async () => {
   const productsData = await fetch('product.json');
    const products = await productsData.json();

    // get Cart
    const savedCart = getStoredCart();
    const initialCart = [];

    for (const id in savedCart) {
        const addProduct = products.find(product => product.id === id);
        if (addProduct) {
            const quantity = savedCart[id];
            addProduct.quantity = quantity;
            initialCart.push(addProduct);
        }
    }
    return { products: products, initialCart: initialCart };
}

