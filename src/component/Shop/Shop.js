import React, {useState} from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const shop = () => {
   const first10 =fakeData.slice(0,19);
   const  [products,setproducts] = useState(first10);
   const [cart,setcart] =useState([]);

    const handleaddproduct =(product) =>{
        const newcart =[...cart,product];
        setcart(newcart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
        
                {
                    products.map(pd => <Product handleaddproduct={handleaddproduct} product={pd}></Product>)
                }
            
            </div>
                <div className="cart-container">
                    <Cart cart = {cart}></Cart>
                   
                </div>

        </div>
    );
};

export default shop;