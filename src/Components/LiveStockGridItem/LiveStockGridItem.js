import React from 'react';
import './LiveStockGridItem.scss';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import AddToCart from '../AddToCart/AddToCart';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { clearFilters } from '../../Action/filters';

//function menampilkan grid item masing-masing hewan qurban
function LiveStockGridItem({ livestock }){
  const dispatch = useDispatch();

  return (
    <div className='livestock-item' key={livestock.id}>
      <div className="livestock-item--box">
        <img src={livestock.image} alt="livestock" className='livestock-item--img' />
      </div>
      <div className="livestock-item--info">
        <div className="flex-row">
          <p className="title">{livestock.category} {livestock.name}</p>
          <p className="price"><NumberFormat value={livestock.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/></p>
        </div>
        <p className="description">{livestock.description.substring(0, 30)}...</p>
      </div>
      <div className="buttons">
        <AddToCart livestock={livestock}/>
        <Link to={`/livestocks/${livestock.id}`} className='more-info' onClick={() => dispatch(clearFilters())}>
          More Info
        </Link>
      </div>
    </div>
  )
}

LiveStockGridItem.propTypes = {
  livestock: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.any,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    stats: PropTypes.shape({
      height: PropTypes.string,
      weight: PropTypes.string,
      age: PropTypes.string,
    })
  })
};

export default LiveStockGridItem;
