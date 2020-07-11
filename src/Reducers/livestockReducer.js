import { uuid } from 'uuidv4';
import DMB20 from './assets/DMB20.jpg';
import DMB25 from './assets/DMB25.jpg';
import DMB30 from './assets/DMB30.jpg';
import DMB40 from './assets/DMB40.jpg';
import DMB50 from './assets/DMB50.jpg';
import KMB25 from './assets/KMB25.jpg';
import KMB252 from './assets/KMB25(2).jpg';
import KMB30 from './assets/KMB30.jpg';
import KMB40 from './assets/KMB40.jpg';
import PRM70 from './assets/PRM70.jpg';
import PRM702 from './assets/PRM70(2).jpg';
import PRM703 from './assets/PRM70(3).jpg';
import PRM75 from './assets/PRM75.jpg';
import SP200 from './assets/SP200.jpg';
import SP250 from './assets/SP250.jpg';
import SP300 from './assets/SP300.jpg';
import SP3002 from './assets/SP300(2).jpg';
import SP350 from './assets/SP350.jpg';
import SP400 from './assets/SP400.jpg';
import SP500 from './assets/SP500.jpg';
import SP600 from './assets/SP600.jpg';
import SP6002 from './assets/SP600(2).jpg';
import SP700 from './assets/SP700.jpg';
import SP1000 from './assets/SP1000.jpg';

//menyimpan data hewan qurban dan fotonya
const livestockState = {
  livestocks: [
    {
        id: uuid(),
        image: DMB20,
        category: 'Sahabat',
        name: 'Domba',
        price: 2300000,
        description: 'Domba dengan Kategori Sahabat memiliki bobot hidup ± 20kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '15-25 kg',
            age: '± 1 tahun'
        }
    },
    {
        id: uuid(),
        image: DMB25,
        category: 'Sakinah',
        name: 'Domba',
        price: 2700000,
        description: 'Domba dengan Kategori Sakinah memiliki bobot hidup ± 25kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '20-30 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: DMB30,
        category: 'Zuhud',
        name: 'Domba',
        price: 3300000,
        description: 'Domba dengan Kategori Zuhud memiliki bobot hidup ± 30kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '25-35 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: DMB40,
        category: 'Tawakkal',
        name: 'Domba',
        price: 4300000,
        description: 'Domba dengan Kategori Tawakkal memiliki bobot hidup ± 40kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '35-45 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: DMB50,
        category: 'Jihad',
        name: 'Domba',
        price: 5500000,
        description: 'Domba dengan Kategori Jihad memiliki bobot hidup ± 50kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '45-55 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: KMB25,
        category: 'Sakinah',
        name: 'Kambing Jawa',
        price: 2600000,
        description: 'Kambing dengan Kategori Sakinah memiliki bobot hidup ± 25kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '20-30 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: KMB252,
        category: 'Sakinah',
        name: 'Kambing Jawa',
        price: 2600000,
        description: 'Kambing dengan Kategori Sakinah memiliki bobot hidup ± 25kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '20-30 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: KMB30,
        category: 'Zuhud',
        name: 'Kambing Jawa',
        price: 3000000,
        description: 'Kambing dengan Kategori Zuhud memiliki bobot hidup ± 30kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '25-35 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: KMB40,
        category: 'Tawakkal',
        name: 'Kambing Jawa',
        price: 3700000,
        description: 'Kambing dengan Kategori Tawakkal memiliki bobot hidup ± 40kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '35-45 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: PRM70,
        category: 'Premium',
        name: 'Domba',
        price: 7500000,
        description: 'Domba Garut dengan Kategori Premium memiliki bobot hidup ± 70kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '65-75 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: PRM702,
        category: 'Premium',
        name: 'Domba',
        price: 7500000,
        description: 'Domba Garut dengan Kategori Premium memiliki bobot hidup ± 70kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '65-75 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: PRM703,
        category: 'Premium',
        name: 'Domba',
        price: 7500000,
        description: 'Domba Garut dengan Kategori Premium memiliki bobot hidup ± 70kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '65-75 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: PRM75,
        category: 'Premium',
        name: 'Domba',
        price: 9000000,
        description: 'Domba Garut dengan Kategori Premium memiliki bobot hidup ± 75kg',
        stats: {
            height: '± 1(satu) meter',
            weight: '70-80 kg',
            age: '± 1,5 tahun'
        }
    },
    {
        id: uuid(),
        image: SP200,
        category: "Qona'ah",
        name: 'Sapi',
        price: 16000000,
        description: "Sapi Bali dengan Kategori Qona'ah memiliki bobot hidup ± 200kg",
        stats: {
            height: '± 1,5 meter',
            weight: '± 200 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP250,
        category: "Sahabat",
        name: 'Sapi',
        price: 17500000,
        description: 'Sapi dengan Kategori Sahabat memiliki bobot hidup ± 250kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 200 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP300,
        category: "Super Sahabat",
        name: 'Sapi',
        price: 19000000,
        description: 'Sapi dengan Kategori Super Sahabat memiliki bobot hidup ± 300kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 300 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP3002,
        category: "Super Sahabat",
        name: 'Sapi',
        price: 19000000,
        description: 'Sapi dengan Kategori Super Sahabat memiliki bobot hidup ± 300kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 300 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP350,
        category: "Sakinah",
        name: 'Sapi',
        price: 21000000,
        description: 'Sapi dengan Kategori Sakinah memiliki bobot hidup ± 350kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 350 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP400,
        category: "Zuhud",
        name: 'Sapi',
        price: 23000000,
        description: 'Sapi dengan Kategori Zuhud memiliki bobot hidup ± 400kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 400 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP500,
        category: "Tawakkal",
        name: 'Sapi',
        price: 28000000,
        description: 'Sapi dengan Kategori Tawakkal memiliki bobot hidup ± 500kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 500 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP600,
        category: "Super Tawakkal",
        name: 'Sapi',
        price: 33000000,
        description: 'Sapi dengan Kategori Super Tawakkal memiliki bobot hidup ± 600kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 600 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP6002,
        category: "Super Tawakkal",
        name: 'Sapi',
        price: 33000000,
        description: 'Sapi dengan Kategori Super Tawakkal memiliki bobot hidup ± 600kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 600 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP700,
        category: "Jihad",
        name: 'Sapi',
        price: 36000000,
        description: 'Sapi dengan Kategori Jihad memiliki bobot hidup ± 700kg',
        stats: {
            height: '± 1,5 meter',
            weight: '± 700 kg',
            age: '± 2 tahun'
        }
    },
    {
        id: uuid(),
        image: SP1000,
        category: "Super Jihad",
        name: 'Sapi',
        price: 48000000,
        description: 'Sapi dengan Kategori Super Jihad memiliki bobot hidup ± 1 ton',
        stats: {
            height: '± 1,5 meter',
            weight: '± 1 ton',
            age: '± 2,5 tahun'
        }
    }
    ],
    cart: [],
    total: 0
}
  
const livestockReducer = (state = livestockState, action) => {
    switch (action.type) {
      case 'ADD_NEW_LIVESTOCK': 
        return {
          ...state,
          livestocks: [ ...state.livestocks, action.livestock ]
        }
      case 'ADD_TO_CART':
        const addedLiveStock = state.livestocks.find((animal) => action.id === animal.id);
        const existLiveStock = state.cart.find((existLiveStock) => action.id === existLiveStock.id);
        
        if (existLiveStock) {
          addedLiveStock.quantity += 1;
          return {
            ...state,
            total: state.total + addedLiveStock.price
          }
        } else {
          addedLiveStock.quantity = 1;
          const newTotal = state.total + addedLiveStock.price
          return {
            ...state,
            cart: [...state.cart, addedLiveStock],
            total: newTotal
          }
        };
      case 'REMOVE_FROM_CART':
        const animalToRemove = state.cart.find((animal) => action.id === animal.id)
        const removeAnimal = state.cart.filter((animal) => action.id !== animal.id);
  
        const newTotal = state.total - (animalToRemove.price * animalToRemove.quantity)
        return {
          ...state,
          cart: removeAnimal,
          total: newTotal
        }
      case 'DECREMENT':
        const animal = state.cart.find((animal) => action.id === animal.id);
  
        if (animal.quantity > 1) {
          animal.quantity -= 1;
          const newTotal = state.total - animal.price
          return {
            ...state,
            total: newTotal
          }
        } else {
          return state
        };
      case 'CLEAR_CART':
        return {
          ...state,
          cart: [],
          total: 0
        }
      default:
        return state;
    }
  }
  
  export default livestockReducer;
  //reducer hewan qurban