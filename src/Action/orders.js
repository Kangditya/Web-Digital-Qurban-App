// Digunakan sebagai action dalam form order hewan qurban
import {uuid} from 'uuidv4';

export const makeOrder = ({ shippingInfo = {}, confirmTransfer = {}, items = {} } = {}) => ({
  type: 'MAKE_ORDER',
  order: {
    id: uuid(),
    shippingInfo,
    confirmTransfer,
    items
  }
})