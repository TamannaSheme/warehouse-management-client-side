// My Item JS Added

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../CustomHooks/UseProducts';

const MyItems = () => {
  const [products, setProducts] = useProducts();
  const [user] = useAuthState(auth);


  // console.log(user);


  const [myItem, setMyItem] = useState([]);

  console.log(myItem);

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
          console.log(data);
          const remaining = products.filter(product => product._id !== id)
          setProducts(remaining);
        })
    }
  }



  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;

      // console.log(email);

      const url = `https://rocky-brook-78230.herokuapp.com/myitems?email=${email}`;
      if (email) {
        const { data } = await axios.get(url, {

          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }

        });
        console.log(data);
        setMyItem(data);
      }
    }

    getMyItems();

  }, [user]);
  return (
    <div>
      <h1 className="text-center mt-5 my-items-title mb-5">  My Items  </h1>
      <div>
        <h1>    my item:  {myItem.length} </h1>
        <h1>Name: {myItem.name}
          <button onClick={() => handleDelete(products._id)}> X </button>
        </h1>

      </div>
      <ToastContainer />
    </div>
  );
};

export default MyItems;
