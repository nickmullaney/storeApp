import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

// eslint-disable-next-line no-unused-vars
export const incrementInventoryOnRemove = (product) => async (dispatch) => {
  product = {...product, inStock: product.inStock + 1};
  console.log('this is the product we are trying to remove', product);
  const res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  console.log('was it removed?', res.data);
  // let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${product.category}`);
  // dispatch(changeProducts(response.data.results));
  getProducts(product.category);
};

// eslint-disable-next-line no-unused-vars
export const decrementInventoryOnAdd = (product) => async(dispatch) => {
  product = {...product, inStock: product.inStock - 1};
  await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);

  // let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${product.category}`);
  // dispatch(changeProducts(response.data.results));
  getProducts(product.category);
};

export const { changeProducts, addProduct, removeProduct, reset } = productsSlice.actions;
export default productsSlice.reducer;