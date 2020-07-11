import React, { Fragment } from 'react'
import './AddToCart.scss'
import { ReactComponent as Cart } from './../../shopping-cart-solid.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Action/livestocks';

// function untuk menambahkan item hewan qurban ke menu checkout
function AddToCart({ livestock }) {
  const dispatch = useDispatch();
  
  return (
    <Fragment>
      <button className='add-to-cart mb-small' onClick={() => dispatch(addToCart(livestock.id))}>
        <Cart height='15' width='15' color='white' className='cart' />
        Add
      </button>
    </Fragment>
  )
}


export default AddToCart
