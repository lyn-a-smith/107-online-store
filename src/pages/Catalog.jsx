import Product from "../components/Product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsToDisplay, setProductsToDisplay] = useState([]);

    useEffect(() => {
        //load products from the service
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        loadCatalog();
    }, [] //empty array means run only once when the component is mounted
    );

    function loadCatalog() {
        //load products from the service
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);

        //Move this to a service later
        let cats = ["Fruits", "Vegetables", "Snacks"];
        setCategories(cats);
    }

    function filterByCategory(category) {
       let list = [];
       for (let i=0; i<products.length; i++) {
        let prod = products[i];
        if (prod.category === category) {
            list.push(prod);
        }
       }     setProductsToDisplay(list);
    }

    return (
        <div className="container">
            <h1>Welcome to my catalog</h1>
            <p>These are the available products.</p>

            <button onClick={() => setProductsToDisplay(products)}>All</button>

            {categories.map(cat => <button key={cat} onClick={() => filterByCategory(cat)}>{cat}</button>)}

            {productsToDisplay.map(prod => <Product key={prod._id} data={prod} />)}
            
        </div>
    )
}

export default Catalog;