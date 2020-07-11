import React, { useState, useEffect, Fragment } from 'react'
import './LiveStockGrid.scss';
import LiveStockGridItem from '../LiveStockGridItem/LiveStockGridItem';
import { getFilteredLiveStocks } from '../../selectors/livestocks';
import { useSelector } from 'react-redux';

//tampilan card hewan qurban pada home page
function LiveStockGrid() {
  const filteredLivestocks = useSelector(getFilteredLiveStocks);
  // Set maksimal tampil 12 hewan
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ livestocksPerPage ] = useState(12);

  
  const indexOfLastLivestock = currentPage * livestocksPerPage;
  const indexOfFirstPost = indexOfLastLivestock - livestocksPerPage;
  const currentLivestocks = filteredLivestocks.slice(indexOfFirstPost, indexOfLastLivestock);

  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredLivestocks.length / livestocksPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (filteredLivestocks.length < 12) {
      setCurrentPage(1)
    }
  }, [filteredLivestocks])

  // Ganti halaman
  const paginate = (number) => setCurrentPage(number);

  return (
    <Fragment>
      <div className="livestock-grid">
        {currentLivestocks.map((livestock) => <LiveStockGridItem livestock={livestock} key={livestock.id}/>)}
      </div>
      <div className="pagination">
        <ul>
          {
            filteredLivestocks.length > 12 ? pageNumbers.map((number) => (
              <li className={currentPage === number ? 'active' : ''} key={number} onClick={() => paginate(number)}>
                {number}
              </li>
            )) :
              null
          }
          <div className="bar"></div>
        </ul>
      </div>
    </Fragment>
  )
}

export default LiveStockGrid
