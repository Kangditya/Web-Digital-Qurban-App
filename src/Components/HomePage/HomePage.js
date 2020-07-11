import React from 'react';
import './HomePage.scss';
import SearchBox from '../SearchBox/SearchBox';
import FilterList from '../FilterList/FilterList';
import LiveStockGrid from '../LiveStockGrid/LiveStockGrid';

//tampilan home utama
function HomePage() {
  return (
    <div className="App">
      <SearchBox />
      <FilterList />
      <div className='main-grid'>
        <LiveStockGrid />
      </div>
    </div>
  )
}

export default HomePage;
