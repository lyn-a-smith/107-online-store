// src/pages/Catalog.jsx
import Product from "../components/Product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsToDisplay, setProductsToDisplay] = useState([]);

    useEffect(() => {
        loadCatalog();
    }, []);

    function loadCatalog() {
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        setProductsToDisplay(data);

        // Shoe specific categories
        let cats = ["Running", "Casual", "Dress", "Athletic"];
        setCategories(cats);
    }

    function filterByCategory(category) {
       let list = products.filter(prod => prod.category === category);
       setProductsToDisplay(list);
    }

    return (
        <div className="container text-center py-4">
            <h1 className="mb-3 text-uppercase fw-bold text-burgundy">The Collection</h1>
            <p className="text-secondary mb-4">Explore our exclusive custom designs.</p>

            <div className="mb-4 d-flex justify-content-center gap-2">
                <button className="btn btn-outline-light" onClick={() => setProductsToDisplay(products)}>All</button>
                {categories.map(cat => (
                    <button key={cat} className="btn btn-outline-light" onClick={() => filterByCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {productsToDisplay.map(prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;