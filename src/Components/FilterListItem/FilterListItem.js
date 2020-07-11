import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './FilterListItem.scss';
import { setCheckboxFilter, removeCheckboxFilter } from '../../Action/filters';
import { getAllLivestock, getAllLivestockCategory } from '../../selectors/livestocks';


//menampilkan list filter berdasarkan kategori yang dipilih
function FilterListItem() {
  const livestocks = useSelector(getAllLivestock);
  const livestockCategory = useSelector(getAllLivestockCategory);
  const dispatch = useDispatch();

  const handleFilterBrand = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setCheckboxFilter(value))
    } else {
      dispatch(removeCheckboxFilter(value))
    }
  }

  const CategoryItemsCount = {}
  livestocks.forEach(livestock => {
    CategoryItemsCount[livestock.category] = CategoryItemsCount[livestock.category] + 1 || 1;
  })

  return (
    <Fragment>
      {
        livestockCategory.map((livestock, i) => {
          return (
            <div className='filter-list' key={i} >
              <input type="checkbox" name={livestock} id={livestock} value={livestock} onChange={(e) => handleFilterBrand(e)} />
              <label htmlFor={livestock}>{livestock} ({CategoryItemsCount[livestock]})</label>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default FilterListItem
