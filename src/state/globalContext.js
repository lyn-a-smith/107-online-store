import { createContext } from "react";

// GlobalContext defines context structure
const GlobalContext = createContext({
    cart: [], // Default cart is an empty array, will hold objects later
    user: {}, // Default user is an empty object, can store user infor like name, email, etc.

    addProductToCart: () => {}, // Placeholder function for adding products to cart
    clearCart: () => {}, // Placeholder function for clearing the cart
    removeProductFromCart: () => {}, // Placeholder function for removing a product from the cart
})

export default GlobalContext;