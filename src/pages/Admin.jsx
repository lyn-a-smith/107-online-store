import { useState } from "react";

function Admin() {
    // const [state, setState] = useState(intialValue);
    const [couponCode, setCouponCode] = useState('');
    const [couponDiscount, setCouponDiscount] = useState('');
    const [coupons, setCoupons] = useState('');


    function saveCoupon() {
        console.log(couponCode)
        console.log(couponDiscount)

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }

        setCoupons([...coupons, newCoupon]) // ... spread operator 

    }



    return (
        <div>
            <h1 className="text-center mb-4">Store Admin Page</h1>

            <div className="d-flex gap-4">
                <section className="text-white w-50">
                    <h2>Add Products</h2>
                </section>

                <section className="text-white w-50">
                    <h2>Add Coupons</h2>

                    <div>
                        <div className="card">
                            <div className="card-body">
                               
                                <div className="mb-4">
                                    <label className="form-label">Code</label>
                                    <input 
                                    className="form-control" 
                                    type="text" 
                                    value={couponCode} 
                                    onChange={(e) => setCouponCode(e.target.value)} />
                                </div>
                                
                                <div className="mb-4">
                                    <label className="form-label">Discount</label>
                                    <input 
                                    className="form-control" 
                                    type="text" 
                                    value={couponDiscount} 
                                    onChange={(e) => setCouponDiscount(e.target.value)} />
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-secondary" onClick={saveCoupon}>Save Coupon</button>
                                </div>

                            </div>
                        </div>
                        {/* Rendering Coupon*/}
                        {
                            (coupons.length < 1)
                            ? <p>There aren't any coupons</p>
                            : <ul className="list-group">
                                {
                                    coupons.map(coupon => (
                                        <li key={coupon.code} className="list-group-item">{coupon.code} - {coupon.discount}%</li>
                                    ))
                                }
                            </ul>
                        }

                    </div>

                </section>
            </div>

        </div>
    );
}

export default Admin;