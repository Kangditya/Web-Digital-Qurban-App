
const filtersReducerDefaultState = {
    category: [],
    name: ""
  }
  
  const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          name: action.name
        };
      case 'SET_CHECKBOX_FILTER':
        return {
          ...state,
          category: [...state.category, action.category]
        }
      case 'REMOVE_CHECKBOX_FILTER':
        return {
          ...state,
          category: state.category.filter((category) => category !== action.category)
        }
      case 'CLEAR_FILTERS':
        return {
          ...state,
          category: [],
          name: ""
        }
      default:
        return state
    }
  }
  
  export default filtersReducer;
  //reducer filter