// Product JS 

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../CustomHooks/UseProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProduct] = useProducts();


    return (
        <div>
            <h1 className='text-center products-title mt-5'> Our All Products {products.length}  </h1>
            <div className="products-container">
                <div className="container">

                    <div className="load-products">
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }

                    </div>
                    <button className="manage-all-inventory">
                        <Link className="manage-all-inventory-link" to="/manageinventory"> Manage Inventory </Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Products;