import { useState } from "react";

function QuantityPicker(props) {
    // const [state, setState] = useState(initialValue)
    const [quantity, setQuantity] = useState(1);

    function onDecrease() {
        console.log("decrease");

        setQuantity(quantity - 1);
        props.onQuantityChange(quantity - 1); // Notify the parent component about the quantity change
    }

    function onIncrease() {
        console.log("increase");
        setQuantity(quantity + 1);
        props.onQuantityChange(quantity + 1); // Notify the parent component about the quantity change  
    }

    return (
        <div>
            <button className="btn btn-dark" onClick={onDecrease} disabled={quantity == 1}>-</button>
            <label className="mx-2">{quantity}</label>
            <button className="btn btn-dark" onClick={onIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;