import { createReducer } from "@reduxjs/toolkit";
import { GET, CHANGE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, RESET } from './constants.js';

// let initialState = [];
let products = [];

const productsReducer = createReducer(
  products, {
  [GET]: (state, action) => {
    return action.payload;
  },
  [CHANGE_PRODUCTS]: (state, action) => {
    return {
      ...state,
      products: state.products.filter(product => product.category === action.payload.name)
    }
  },
  [ADD_TO_CART]: (state, action) => {
    return {
      ...state,
      inStock: state.products.filter(product => {
        if (product.name === action.payload.name) {
          product.inStock--;
        }
      })
    }
  },
  [REMOVE_FROM_CART]: (state, action) => {
    return {
      ...state,
      inStock: state.products.filter(product => {
        if (product.name === action.payload.name) {
          product.inStock++;
        }
      })
    }
  },
  [RESET]: (state, action) => {
    return { state }
  }
});

export const getProducts = () => async (dispatch, getState) => {
  try {
    let response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    console.log('Inital Products from API Call: ', response.data.results);
    dispatch(getAction(response.data.results));
  } catch (e) {
    console.log('Error Fetching Products', e.message);
  }
}


export default productsReducer;
// let initialState = {
//   products: [
//     { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//     { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//     { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//     { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//     { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//     { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//     { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//   ]
// };

// function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'CHANGE_PRODUCTS':
//       return {
//         ...state,
//         products: initialState.products.filter(product => product.category === action.payload.name)
//       }

//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         inStock: state.products.filter(product => {
//           if (product.name === action.payload.name) {
//             product.inStock = product.inStock - 1;
//           }
//         })
//       }

//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         inStock: state.products.filter(product => {
//           if (product.name === action.payload.name) {
//             product.inStock = product.inStock + 1;
//           }
//         })
//       }

//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }

