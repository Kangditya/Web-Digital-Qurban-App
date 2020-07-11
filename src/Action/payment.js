// Digunakan sebagai action dalam form pembayaran hewan qurban
import {uuid} from 'uuidv4';

export const addShippingInfo = ({ sohibulQurban = "", noTelp = 0, penerimaQurban = "", noTelpPenerima = 0, alamat = "", kabKota = "", prov = "", pos = 0, notes = ""} = {}) => ({
  type: 'ADD_SHIPPING_INFO',
  shippingInfo: {
    id: uuid(),
    sohibulQurban,
    noTelp,
    penerimaQurban,
    noTelpPenerima,
    alamat,
    kabKota,
    prov,
    pos,
    notes
  }
})

export const addConfirmTransfer = ({ bank = "", norek = 0, account = "", transfer = 0 }) => ({
  type: 'ADD_CONFIRM_TRANSFER',
  confirmTransfer: {
    id: uuid(),
    bank,
    norek,
    account,
    transfer
  }
})

export const clearInfo = () => ({
  type: 'CLEAR_INFO'
})