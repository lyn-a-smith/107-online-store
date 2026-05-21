import QuantityPicker from "./QuantityPicker";
import "./Product.css";

function Product(props) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={"/images/"+props.data.image} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.category}</p>
                    <p>Price ${props.data.price.toFixed(2)}</p>
                    <QuantityPicker />
                    <button href="#" className="btn btn-dark mt-4">Add to cart</button>
                </div>
            </div>

            
        </div>
    )
}

export default Product;