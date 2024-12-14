import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        const uniqueItem = { ...product, uniqueId: Date.now() + Math.random() };
        setCart((prevCart) => [...prevCart, uniqueItem]);
    };
    const removeFromCart = (uniqueId) => {
        setCart((prevCart) => prevCart.filter(item => item.uniqueId !== uniqueId));
    };
    const addToWishlist = (product) => {
        const uniqueItem = { ...product, uniqueId: Date.now() + Math.random() };
        setWishlist((prevWishlist) => [...prevWishlist, uniqueItem]);
    };
    const removeFromWishlist = (uniqueId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.uniqueId !== uniqueId));
    };
    const clearCart = () => {
        setCart([]);
    };
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            wishlist,
            addToWishlist,
            removeFromWishlist,
            clearCart
        }}>
            {children}
            
        </CartContext.Provider>
    );
};
export const useCart = () => {
    return useContext(CartContext);
};