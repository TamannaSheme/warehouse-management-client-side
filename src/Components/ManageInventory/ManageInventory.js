// Inventory  JS ADDED


import React from 'react';
import useProducts from '../CustomHooks/UseProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ManageInventory.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    // console.log(product);

    const handleDelete = id => {

        const procced = window.confirm("Are your sure?")
        if (procced) {
            const url = `https://rocky-brook-78230.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast(data);
                    //    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })



        }
    }

    return (
        <div>
            <h1 className='text-center mt-5'>   Manage All Inventory </h1>
            <div className="add-item">
                <Link to="/addproduct"> Add New Item </Link>
            </div>
            <div className='inventory-item'>

                <>
                    {
                        products.map(product => <div key={product._id}>

                            <div className="manage-product">
                                <div className="container">
                                    <div className="mang-card">
                                        <img className='mng-img' src={product.img} alt="" />
                                        <div className="mng-container">
                                            <h1> Name: {product.name} </h1>
                                            <p className='mng-description'> {product.description} </p>
                                            <h4> price: {product.price} </h4>
                                            <h4> Quantity : {product.quantity} </h4>
                                            <h4> supplier:{product.supplier} </h4>
                                        </div>
                                        <button onClick={() => handleDelete(product._id)} className='product-delete'><FontAwesomeIcon icon={faTrash} /> </button>
                                    </div>

                                </div>
                            </div>

                        </div>)
                    }

                </>

            </div>
        </div>
    );
};

export default ManageInventory;