import { createReducer } from '@reduxjs/toolkit';
import { ADD_TO_CART, REMOVE_FROM_CART, RESET } from './constants';

let cart = [];

const cartReducer = createReducer(
  cart, {
  [ADD_TO_CART]: (state, action) => {
    return [...state, action.payload];
  },
  [REMOVE_FROM_CART]: (state, action) => {
    return state.filter(item => item.name !== action.payload.name);
  },
  [RESET]: (state, action) => {
    return [];
  }
});



// let initialState = {
//   cart: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         cart: [...state.cart, action.payload],
//       }
//     case 'REMOVE_FROM_CART':
//       return {
//       ...state,
//        cart: state.cart.filter(item => item.name !== action.payload.name),
//       }
//     default:
//       return state;
//   }
// }

export default cartReducer;