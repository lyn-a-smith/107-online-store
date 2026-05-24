import QuantityPicker from "./QuantityPicker";
import "./Product.css";
import { useState } from "react";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty) {
        // Handle quantity change logic here
        console.log("Quantity changed to:", qty);
        setQuantity(qty); // Update the quantity state
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={"/images/"+props.data.image} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.category}</p>
                    <p>Price ${props.data.price.toFixed(2)}</p>
                    <p>Total: ${getTotal()}</p>
                    <QuantityPicker onQuantityChange={handleQuantityChange} />
                    <button href="#" className="btn btn-dark mt-4">Add to cart</button>
                </div>
            </div>

            
        </div>
    )
}

export default Product;