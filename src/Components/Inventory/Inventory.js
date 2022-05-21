
// Inventory JS Added

import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import './Inventory.css'
const Inventory = () => {
    const { productId } = useParams();


    const [product, setProduct] = useState({});
    const { _id, name, img, price, description, quantity, supplier } = product;

    function removeOne() {
        let newQuantity = quantity - 1;
        const newProduct = { ...product, quantity: newQuantity }
        //copy all previous data if exist in product and setup new quantity 


        setProduct(newProduct);
        fetch(`https://rocky-brook-78230.herokuapp.com/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })


        // console.log(newProduct);
        if (newQuantity === 0) {
            toast('Sold Out');
        }
    }

    const qtyRef = useRef();

    function addOne() {
        const newProductQty = qtyRef.current.value;
        let newQuantity = parseInt(quantity + parseInt(newProductQty));
        const newProduct = { ...product, quantity: newQuantity }
        setProduct(newProduct);
        fetch(`https://rocky-brook-78230.herokuapp.com/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })

    }


    useEffect(() => {
        const url = `https://rocky-brook-78230.herokuapp.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
        console.log(product);
    }, []);



    return (
        <div>
            <div className="container">
                <h2 className='text-center mt-5'> Inventory </h2>
                <div className="inventory">

                    <div className="single-card">
                        <img className='single-card-img' src={img} alt="" />
                        <div className="single-card-container">
                            <h1 className="card-title"> Product Name: {name} </h1>

                            <p className="card-description"> {description} </p>

                            <h3 className="card-quantity"> Quantity:{quantity}  </h3>
                            <h3 className="card-quantity"> Price: {price} </h3>
                            <h3 className="card-supplier"> Supplier: {supplier} </h3>
                            <ToastContainer />
                        </div>
                    </div>
                    <div className="delivered-add-btn">
                        <div className="delivered">
                            <button onClick={() => removeOne(_id)} className='delivered-btn'> Delivered </button>
                        </div>

                        <div className="add-quantity">
                            <form>
                                <input ref={qtyRef} type="number" />
                            </form>
                            <button onClick={() => addOne(_id)} className='add-quantity-btn'> Add-quantity </button>
                        </div>

                        <button className="manage-all-inventory">
                            <Link className="manage-all-inventory-link" to="/manageinventory"> Manage Inventory </Link>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inventory;