import { useState } from 'react';

function Admin() {
    // Local State for storing the lists
    const [products, setProducts] = useState([]);
    const [coupons, setCoupons] = useState([]);

    // State management for product form
    const [productTitle, setProductTitle] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productPrice, setProductPrice] = useState('');

    // State management for coupon form
    const [couponCode, setCouponCode] = useState('');
    const [couponDiscount, setCouponDiscount] = useState('');

    const handleProductSubmit = () => {
        // Validation: Prevent saving empty products
        if (!productTitle || !productCategory || !productPrice) return;

        // Create new product object
        const newProduct = {
            id: Date.now(), // Generate a unique ID
            title: productTitle,
            category: productCategory,
            image: productImage || "https://placehold.co/400x300/1e1e1e/800020?text=Product+Image",
            price: parseFloat(productPrice)
        };

        // Add to array and reset form
        setProducts([...products, newProduct]);
        setProductTitle('');
        setProductCategory('');
        setProductImage('');
        setProductPrice('');
    };

    const handleCouponSubmit = () => {
        // Validation: Prevent saving empty coupons
        if (!couponCode || !couponDiscount) return;

        // Create new coupon object
        const newCoupon = {
            id: Date.now(),
            code: couponCode,
            discount: couponDiscount
        };

        // Add to array and reset form
        setCoupons([...coupons, newCoupon]);
        setCouponCode('');
        setCouponDiscount('');
    };

    return (
        <div className="container py-4">
            <h1 className="text-center mb-5 text-uppercase fw-bold text-light">Store Administration</h1>

            <div className="row">
                {/* Left Column: Add Products */}
                <section className="col-md-6 mb-4">
                    <div className="card card-custom p-4 mb-4">
                        <h3 className="text-light mb-3">Add Products</h3>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Title</label>
                            <input 
                                className="form-control bg-dark text-light border-secondary" 
                                type="text" 
                                value={productTitle} 
                                onChange={(e) => setProductTitle(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Category</label>
                            <input 
                                className="form-control bg-dark text-light border-secondary" 
                                type="text" 
                                value={productCategory} 
                                onChange={(e) => setProductCategory(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Image (URL)</label>
                            <input 
                                className="form-control bg-dark text-light border-secondary" 
                                type="text" 
                                placeholder="Add URL for image"
                                value={productImage} 
                                onChange={(e) => setProductImage(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Price</label>
                            <input 
                                className="form-control bg-dark text-light border-secondary" 
                                type="number" 
                                value={productPrice} 
                                onChange={(e) => setProductPrice(e.target.value)} 
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-burgundy w-100" onClick={handleProductSubmit}>Save Product</button>
                        </div>
                    </div>

                    {/* Products List */}
                    <div className="p-3">
                        <h4 className="text-light mb-3 border-bottom border-secondary pb-2">Products List:</h4>
                        {products.length === 0 ? (
                            <p className="text-secondary">No products added yet.</p>
                        ) : (
                            <div className="d-flex flex-wrap gap-3">
                                {products.map(product => (
                                    <div key={product.id} className="card card-custom" style={{ width: '10rem' }}>
                                        <img src={product.image} className="card-img-top border-bottom border-secondary" alt={product.title} />
                                        <div className="card-body p-2 text-center">
                                            <span className="badge bg-secondary mb-1">{product.category}</span>
                                            <h6 className="card-title text-light mb-1 small">{product.title}</h6>
                                            <p className="text-burgundy fw-bold m-0">${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Right Column: Add Coupons */}
                <section className="col-md-6 mb-4">
                    <div className="card card-custom p-4 mb-4">
                        <h3 className="text-light mb-3">Add Coupons</h3>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Code</label>
                            <input 
                                className="form-control bg-dark text-light border-secondary" 
                                type="text" 
                                placeholder="e.g., WINTER20"
                                value={couponCode} 
                                onChange={(e) => setCouponCode(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Discount (%)</label>
                            <input 
                                className="form-control bg-dark text-light border-secondary" 
                                type="number" 
                                placeholder="e.g., 20"
                                value={couponDiscount} 
                                onChange={(e) => setCouponDiscount(e.target.value)} 
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-burgundy w-100" onClick={handleCouponSubmit}>Save Coupon</button>
                        </div>
                    </div>

                    {/* Coupons List */}
                    <div className="p-3">
                        <h4 className="text-light mb-3 border-bottom border-secondary pb-2">Coupons List:</h4>
                        {coupons.length === 0 ? (
                            <p className="text-secondary">No coupons created yet.</p>
                        ) : (
                            <ul className="list-group">
                                {coupons.map(coupon => (
                                    <li key={coupon.id} className="list-group-item bg-dark text-light border-secondary d-flex justify-content-between align-items-center">
                                        <span className="fw-bold">{coupon.code}</span>
                                        <span className="badge bg-burgundy rounded-pill fs-6">{coupon.discount}% OFF</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Admin;