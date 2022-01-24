import React from 'react';
import {useParams} from 'react-router';
import DATA from '../Data.js';
import Product from './Product';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem , delItem } from './redux/actions/index';

function ProductDetail() {
  const [cartBtn, setCartBtn] = useState("Add to cart")

    const proid = useParams();
    const proDeatil = DATA.filter( (x) => x.id == proid.id);
    const product = proDeatil[0];
    const dispatch = useDispatch();
    

    const handleCart = (product) => {
      if(cartBtn === "Add to cart"){
        dispatch(addItem(product));
        setCartBtn("Remove from cart");
      }
      else {
        dispatch(delItem(product))
        setCartBtn("Add to cart")
      }

    }
    return (
        <>
        <div className="container my-5 py-3">
         <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px"/>
           </div>
           <div className="col-md-6 d-flex flex-column justify-content-center">
           <h1 className="display-5 fw-bold">{product.title}</h1>
           <hr/>
           <h2 className="my-4"> ${product.price}</h2>
           <p className="lead">{product.desc}</p>
           <button onClick={ () => handleCart(product)} className=" btn btn-outline-primary w-100 my-5">{cartBtn}</button>
           </div>
          </div>
        </div>
        </>
    )
}
export default ProductDetail;
