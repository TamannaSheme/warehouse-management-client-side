/* Add new product JS  */

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './AddNewProduct.css'

const AddNewProduct = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://rocky-brook-78230.herokuapp.com/products`;
        fetch(url, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (!result.insertedId) {
                    toast("Your item not added! Plz tyr again");
                }

                else {
                    toast("Your item added!");
                }

            });




    };



    return (
        <div className='style-addProduct'>
            <h1 className='text-center'>  Add New Product with new brand </h1>
            <div className="container addProduct-area">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='name-area-field' placeholder='Your email' {...register("email", { required: true, maxLength: 30 })} />
                    <input className='name-area-field' placeholder='Enter product name'  {...register("name", { required: true, maxLength: 30 })} />
                    <textarea className='text-area-field' placeholder='Enter product description' {...register("description")} />
                    <input className='price-area-field' placeholder='Enter product Price' type="number" {...register("price")} />
                    <input className='quantity-area-field' placeholder='Enter product quantity' type="number" {...register("quantity")} />
                    <input className='suplier-area-field' placeholder='Enter product supplier'  {...register("supplier", { required: true, maxLength: 30 })} />
                    <input className='img-area-field' placeholder='photo URL' type="text" {...register("img")} />
                    <input className='submit-area-field' type="submit" value="Add product" />
                    <ToastContainer />


                </form>
            </div>

        </div>
    );
};

export default AddNewProduct;