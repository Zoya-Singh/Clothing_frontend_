import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [all_product, setAllProduct] = useState([]);

    useEffect(() => {
        fetch('https://clothing-store-6uv5.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => setAllProduct(data));

        if(localStorage.getItem('auth-token')) {
            fetch('https://clothing-store-6uv5.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                },
                body: JSON.stringify({auth_token: localStorage.getItem('auth-token')})
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data));
        }
    }, [])

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
        
        if(localStorage.getItem('auth-token')) {
            await fetch('https://clothing-store-6uv5.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                },
                body: JSON.stringify({
                    itemId: itemId
                })
            })
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
        }));
        
        if(localStorage.getItem('auth-token')) {
            await fetch('https://clothing-store-6uv5.onrender.com/removefromcart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                },
                body: JSON.stringify({
                    itemId: itemId
                })
            })
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = all_product.find(
                    (product) => product.id === Number(itemId)
                );
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
