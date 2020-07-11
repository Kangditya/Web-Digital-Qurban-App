import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { ReactComponent as Cart } from './../../shopping-cart-solid.svg';
import { useSelector } from 'react-redux';
import './CartBox.scss';
import { getCartTotal, getCartState } from '../../selectors/livestocks';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../../Action/filters';

// function untuk menampilkan tombol cart/keranjang dalam menampilkan total pembelian hewan qurban
function CartBox() {
  const dispatch = useDispatch();
  const cartInfo = useSelector(getCartState);
  const total = useSelector(getCartTotal);
  
  const itemQuantity = cartInfo
    .map((item) => item.quantity)
    .reduce((item, total) => item + total, 0);
  
  return (
    <Fragment>
      <Link to='/cart' className='cart-box' onClick={() => dispatch(clearFilters())}>
        <Cart height='30' width='30' color='white' />
        <p>{itemQuantity} Total Belanja <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/></p>
      </Link>
    </Fragment>
  )
}


export default CartBox
