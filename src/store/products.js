import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const initialState = [
//   { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//   { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//   { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//   { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//   { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//   { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//   { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
// ];

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    changeProducts: (state, action) => action.payload,

    // addProduct: (state, action) => state.map(product => product.name === action.payload.name ? {...product, inStock: product.inStock - 1} : product),
    
    removeProduct: (state, action) => state.map(product => product.name === action.payload.name ? {...product, inStock: product.inStock + 1} : product),
  }
});

export const getProducts = (activeCategory) => async(dispatch) => { 
  console.log('This is our active Category', activeCategory)
  try{
  // Make our call to get products from the database
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${activeCategory}`);
  // let products = response.data.results.filter(product => product.category === activeCategory);
  dispatch(changeProducts(response.data.results));
  } catch (error) {
    console.log('Error getting products', error.message);
  }
}

export const incrementInventoryOnRemove = (product) => async (dispatch) => {
  product = {...product, inStock: product.inStock + 1};
  console.log('this is the product we are trying to remove', product);
  const res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  console.log('was it removed?', res.data);
  // let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${product.category}`);
  // dispatch(changeProducts(response.data.results));
  getProducts(product.category);
};

export const decrementInventoryOnAdd = (product) => async(dispatch) => {
  product = {...product, inStock: product.inStock - 1};
  await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);

  // let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${product.category}`);
  // dispatch(changeProducts(response.data.results));
  getProducts(product.category);
};


export const { changeProducts, addProduct, removeProduct, reset } = productsSlice.actions;
export default productsSlice.reducer;

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



// export default productsReducer;