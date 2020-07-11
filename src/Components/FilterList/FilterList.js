import React from 'react';
import './FilterList.scss';
import FilterListItem from '../FilterListItem/FilterListItem';

//menampilkan navigasi filter di bagian kiri homepage
function FilterList() {
  return (
    <div className="check-box">
      <h3>Filter by Kategori</h3>
      <FilterListItem />
    </div>
  )
}

export default FilterList
