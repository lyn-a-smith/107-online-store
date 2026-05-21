import Product from "../components/Product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //load products from the service
        const service = new DataService();
        const data = service.getProducts();
        setProducts(data);
    }, [] //empty array means run only once when the component is mounted
    );



    return (
        <div className="container">
            <h1>Welcome to my catalog</h1>
            <p>These are the available products.</p>

            {products.map(prod => <Product key={prod._id} data={prod} />)}
            
        </div>
    )
}

export default Catalog;