import { useState } from "react";
import QuantityPicker from "./QuantityPicker";

function Product({ data }) {
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty) {
        // Handle quantity change logic here
        console.log("Quantity changed to:", qty);
        setQuantity(qty); // Update the quantity state
    }

    function getTotal() {
        let total = data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="card card-custom m-3" style={{ width: '18rem' }}>
            <img 
                src={data.image} 
                className="card-img-top border-bottom border-secondary" 
                alt={data.title} 
            />
            <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title text-light mb-1">{data.title}</h5>
                <p className="text-secondary small mb-3">{data.category}</p>
                
                <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                    <span className="text-light">Price:</span>
                    <span className="text-burgundy fs-5 fw-bold">${data.price.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                    <span className="text-light">Total:</span>
                    <span className="text-burgundy fs-5 fw-bold">${getTotal()}</span>
                </div>
                
                <div className="mb-3 d-flex justify-content-center">
                    <QuantityPicker onQuantityChange={handleQuantityChange} />
                </div>

                <button className="btn btn-burgundy mt-auto w-100">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;