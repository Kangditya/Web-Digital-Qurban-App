import { createStore, combineReducers } from 'redux';
import livestockReducer from '../Reducers/livestockReducer'
import filtersReducer from '../Reducers/filtersReducer';
import paymentFormReducer from '../Reducers/paymentReducer';
import ordersReducer from '../Reducers/ordersreducer';

function configureStore() {
  const store = createStore(
    combineReducers({
      livestockReducer,
      filters: filtersReducer,
      paymentInfo: paymentFormReducer,
      orders: ordersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store;
}

export default configureStore;
//konfigurasi store