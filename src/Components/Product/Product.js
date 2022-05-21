// Product Js Added


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {

    // console.log(product);

    const { _id, name, img, quantity, description, supplier, price } = product;
    
    // console.log(_id);

    const [readMore, setReadMore] = useState(true);
    const toggleReadMore = () => { setReadMore(!readMore) };

    const navigate = useNavigate();
    const updateProduct = id => {

        navigate(`/product/${id}`);
    }

    return (
        <div>
            <div className="product-cart">
                <div className="card">
                    <img className='product-img' src={img} alt="product" />
                    <div className="card-container">
                        <h2 className='product-name'> Name: {name} </h2>
                        <p className='product-description'>
                            {readMore ? description.slice(0, 80) : description}

                            {description.length > 90 &&
                                <span onClick={toggleReadMore}>
                                    {readMore ? '...read more' : ' ...show less'};
                                </span>
                            }
                        </p>
                        <h3 className='product-quantity'> Quantity: {quantity} </h3>
                        <h3 className="product-price"> Price: {price} </h3>
                        <h4 className='product-suplier'>  Supplier:{supplier} </h4>

                    </div>
                    <button onClick={() => updateProduct(_id)} className='product-update'> Update </button>

                </div>
            </div>
        </div>
    );
};

export default Product;