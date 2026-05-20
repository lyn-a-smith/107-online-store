import Product from "../components/Product";

function Catalog() {
    return (
        <div className="container">
            <h1>Welcome to my catalog</h1>
            <p>These are the available products.</p>
            <Product />
        </div>
    )
}

export default Catalog;