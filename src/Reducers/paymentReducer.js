const paymentFormReducerDefaultState = {
    shippingInfo: [],
    confirmTransfer: []
  }
  
  const paymentFormReducer = (state = paymentFormReducerDefaultState, action) => {
    switch (action.type) {
      case 'ADD_SHIPPING_INFO':
        return {
          ...state,
          shippingInfo: [ ...state.shippingInfo, action.shippingInfo  ]
        }   
      case 'ADD_CONFIRM_TRANSFER': 
        return {
          ...state,
          confirmTransfer: [ ...state.confirmTransfer, action.confirmTransfer ]
        }
      case 'CLEAR_INFO':
        return []
      default:
        return state;
    }
  }
  
  export default paymentFormReducer;
  //reducer untuk pembayaran