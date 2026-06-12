import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: 'Lyn', cohort: '67'});

    function addProductToCart(product){
        setCart([...cart, product]) // Add new product to cart array
    }

    function clearCart(){
        setCart([]) // Clear cart by setting it back to an empty array
    }

    function removeProductFromCart(productId) {
        const updatedCart = cart.filter(product => product._id != productId)
        setCart(updatedCart) // update the cart with the filtered list
    }

    //  Return the context provider, passin down state and functions as values
    return (
        <GlobalContext.Provider value={{
            cart: cart, // current cart state
            user: user, // current user state
            addProductToCart: addProductToCart, // function to add product to cart
            clearCart: clearCart, // function to clear the cart
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;