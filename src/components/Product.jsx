import QuantityPicker from "./QuantityPicker";

function Product() {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">Apples</h5>
                    <p className="card-text">Fruits</p>
                    <p>Price $1</p>
                    <QuantityPicker />
                    <button href="#" className="btn btn-dark mt-4">Add to cart</button>
                </div>
            </div>

            
        </div>
    )
}

export default Product;