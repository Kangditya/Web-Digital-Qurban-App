import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import './LiveStock.scss';
import CartBox from './../CartBox/CartBox';
import AddToCart from './../AddToCart/AddToCart';
import { Link } from 'react-router-dom';
import { getAllLivestock } from '../../selectors/livestocks';

//container card lebih detail
function Livestock({ match }) {
  useEffect(() => {

  }, [match.params.id])

  const livestocks = useSelector(getAllLivestock);
  const livestockId = livestocks.find(({ id }) => id === match.params.id);

  return (
    <div className="livestock-details">
      <div className="livestock-details--grid">

        <div className="livestock">
          <div className="livestock--box">
            <img src={livestockId.image} alt="livestock"/>
          </div>
          <div className="livestock--title">
            <h3>{livestockId.category} {livestockId.name}</h3>
            <h3><NumberFormat value={livestockId.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/></h3>
          </div>
          <div className="livestock--description">
            <p>{livestockId.description}</p>
          </div>

        </div>

        <div className="livestock-stats">
          <h1>Detail Hewan Qurban</h1>
          <div className="stat">
            <h2>Kategori</h2>
            <p>{livestockId.category}</p>
          </div>
          {
            Object.entries(livestockId.stats).map(([key, value]) => {
              return (
                <div className="stat" key={key}>
                  <h2>{key}</h2>
                  <p>{value.toString()}</p>
                </div>
              )
            })
          }
        </div>

        <div className='livestock-sidebar'>
          <CartBox />
          <div className="cart-info">
            <h3>{livestockId.category} {livestockId.name} <NumberFormat value={livestockId.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/></h3>
          </div>
          <AddToCart livestock={livestockId}/>
          <Link to='/' className='back-to-store'>
            Kembali ke kandang
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Livestock
