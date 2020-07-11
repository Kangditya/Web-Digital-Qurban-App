import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartPage.scss';
import NumberFormat from 'react-number-format';
import animalImg from './../../WjKdi06222020.jpg'
import { getCartState, getCartTotal } from '../../selectors/livestocks';
import { addToCart, removeFromCart, decrementFromCart, clearCart } from '../../Action/livestocks';
import CheckoutModal from '../CheckOut/CheckOutMod';

// function untuk menampilkan keranjang secara keseluruhan
function CartPage() {
  const livestocks = useSelector(getCartState);
  const total = useSelector(getCartTotal);
  const dispatch = useDispatch();

  const [ modal, setModal ] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  
  return (
    <div className='cart-page'>
      <div className="cart-page--grid">

        <div className="cart-page--items">
          {livestocks.length === 0 ? <h1>Keranjang Masih Kosong.</h1> : null}
          <div className="item-list" >
            {
              livestocks.length > 0 ?

              livestocks.map((livestock) => {
                return (
                  <div className="item" key={livestock.id}>
                    <div className="item--box">
                      <img src={animalImg} alt="livestock" />
                    </div>

                    <div className="item--details">
                      <p className="title">{livestock.category} {livestock.name}</p>
                      <div className='block'>
                        <p className="price">
                          <NumberFormat value={livestock.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-  '}/>
                           (Total: <NumberFormat value={livestock.price*livestock.quantity} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/>)
                        </p>
                        <div className="flex-row">
                          <p className="quantity">Jumlah : {livestock.quantity}</p>
                          <div className='add' onClick={() => dispatch(addToCart(livestock.id))}>+</div>
                          <div className='sub' onClick={() => dispatch(decrementFromCart(livestock.id))}>-</div>
                        </div>
                      </div>
                      <button className='remove' onClick={() => dispatch(removeFromCart(livestock.id))} >Hapus</button>
                    </div>
                  </div>
                )
              })
              :
              null
            }
          </div>
        </div>

        <div className="cart-page--sidebar">
          <h2>Keranjang Belanja</h2>
          <p className="total">Total bayar: <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/></p>
          <Link to='/' className='go-back'>Kembali</Link>
          <button className='clear-cart' disabled={livestocks.length === 0} onClick={() => {dispatch(clearCart())}}>Bersihkan Keranjang</button>
          <button className='buy-now' onClick={openModal} disabled={livestocks.length === 0} >CheckOut</button>
        </div>
      </div>
      <CheckoutModal modal={modal} closeModal={closeModal}/>
    </div>
  )
}

export default CartPage;