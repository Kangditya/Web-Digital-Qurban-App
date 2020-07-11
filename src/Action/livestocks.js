// Digunakan sebagai action dalam data seluruh hewan qurban
import {uuid} from 'uuidv4';

export const addLiveStock = ({ image,category = '', name = '', price = '', description = '', stats, height = '', weight = '', age = ''} = {}) => ({
  type: 'ADD_LIVESTOCK',
  livestock: {
    id: uuid(),
    image,
    category,
    name,
    price,
    description,
    stats: {
      height,
      weight,
      age
    }
  }
})

export const addToCart = (id) => ({
  type: 'ADD_TO_CART',
  id
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  id
});

export const decrementFromCart = (id) => ({
  type: 'DECREMENT',
  id
})

export const clearCart = () => ({
  type: 'CLEAR_CART'
});
