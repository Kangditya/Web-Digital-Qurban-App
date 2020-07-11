import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBox.scss';
import CartBox from '../CartBox/CartBox';
import { setTextFilter } from '../../Action/filters';
import { getSearchBoxInput } from '../../selectors/filters';


//function menampilkan kotak pencarian hewan qurban
function SearchBox() {
  const inputValue = useSelector(getSearchBoxInput);
  const dispatch = useDispatch();

  const searchLivestock = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
  }

  return (
    <div className="search-box">
      <CartBox />
      <h3>Cari Hewan Qurban</h3>
      <input
        className='search-box--input'
        type="text"
        value={inputValue}
        onChange={searchLivestock}
        placeholder='Search...'
      />
    </div>
  )
}

export default SearchBox
