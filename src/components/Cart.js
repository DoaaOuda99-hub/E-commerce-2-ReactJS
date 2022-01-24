import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delItem } from './redux/actions';

 function Cart() {
     const state = useSelector((state) => state.addItem);
     const dispatch = useDispatch();

     const handleClose = (item) => {
         dispatch(delItem(item));
     }


     const cartItems = (cartItem) => {
         return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className='container py-4'>
                    <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label="Close"></button>
                    <div className='row justify-content-center '>
                        <div className='col-md-4'>
                            <img src={cartItem.img} alt={cartItem.title} width="180px" height="200px"/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>$ {cartItem.price}</p>
                            </div>
                    </div>
                </div>
                
                </div>
                
         )
     }

     const button = () => {
         return (
            <div className='container'>
            <div className='row'>
                <NavLink className='btn btn-outline-primary w-25 mx-auto mb-5' to='/checkout'>Proceed To checkout</NavLink>
            </div>
        </div>

         )
         
     }

     const EmptyCart = () => {
        return (
            <div className='px-4 bg-light py-5 rounded-3 my-5'>
             <div className='container py-4'>
                 <div className='row'>
                     <h3>Your cart is empty</h3>
                 </div>
             </div>
             </div>
        );
     }
    return (
        <>
            {state.length === 0 && EmptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
           
        </>
    )
}
export default Cart;