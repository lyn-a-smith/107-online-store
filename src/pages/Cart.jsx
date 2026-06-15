import { useContext } from "react";
import GlobalContext from "../state/globalContext";

function Cart() {
    const cart = useContext(GlobalContext).cart
    const removeProduct = useContext(GlobalContext).removeProductFromCart
    const setCart = useContext(GlobalContext).clearCart

    function getTotalItems() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total = total + cart[i].quantity;
        }
        return total;
    }

    function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total = total + cart[i].price * cart[i].quantity;
        }
        return total.toFixed(2);
    }

    function removeProductFromCart(productId) {
        const updatedCart = cart.filter(product => product._id != productId)
        setCart(updatedCart) // update the cart with the filtered list
    }


    return (
    <div>   
        <h1>Ready to comple the purchas?</h1>

        <div>
            {cart.map(product => (
                <div className="d-flex justify-content-between align-items-center border rounded-2 mb-4">
                    <img width={200} src={product.image} />
                    <h4>{product.title}</h4>
                    <h5>{product.category}</h5>
                    <div>QTY: {product.quantity}</div>
                    <div>Price: ${product.price}</div>
                    <div>Total: ${product.price * product.quantity}</div>
                    <button className="btn btn-burgundy me-4" onClick={() => removeProduct(product._id)} >Remove</button>
                </div>
                    
            ))}
        </div>



        <h2>We have {getTotalItems()} Products in the cart</h2>
        <h3>Total: ${getTotal()}</h3>
    </div>
    );
}

export default Cart;