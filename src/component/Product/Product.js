import React from 'react';
import './Product.css'
const Product = (props) => {
    //console.log(props.product.name);
const{img, name,seller,price,stock} =props.product;

    return (
        <div className='product'>
           <div>
                <img src={img} alt="" />
           </div>
            <div className='padding'>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>only {stock}left in stock - order soon</small></p>
                <button className='main-button' onClick={()=> props.handleaddproduct(props.product)}>add to card</button>

            </div>
        </div>
    );
};

export default Product;