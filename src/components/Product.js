import React from 'react';
import DATA from '../Data.js';
import {NavLink} from 'react-router-dom';

 function Product() {

     const cardItem = (item) => {
         return (
             <div className="card my-5 py-4" style={{width: "18rem"}} key={item.id}>
     <img src={item.img} className="card-img-top" alt={item.title}/>
        <div className="card-body text-center">
      <h5 className="card-title">{item.title}</h5>
    <p className='lead'>${item.price}</p>
   
    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
  </div>
</div>

  )
     }
    return (
        <>
        <div className="container py-5">
        <div className="row">
        <div className="col-12 text-center">
            <h1>Products</h1>
            <hr/>
        </div>
        </div>
        </div>
        <div className="container py-5">
         <div className="row justify-content-around">
         {DATA.map(cardItem)}
         </div>
         </div>


            
        </>
    )
}
export default Product;