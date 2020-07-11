// Digunakan sebagai action dalam memfilter kategori hewan qurban
export const setTextFilter = (name) => ({
    type: 'SET_TEXT_FILTER',
    name
  })
  
  export const setCheckboxFilter = (category) => ({
    type: 'SET_CHECKBOX_FILTER',
    category
  })
  
  export const removeCheckboxFilter = (category) => ({
    type: 'REMOVE_CHECKBOX_FILTER',
    category
  })
  
  export const clearFilters = () => ({
    type: 'CLEAR_FILTERS'
  })