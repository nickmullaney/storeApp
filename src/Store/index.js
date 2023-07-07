import { createStore, combineReducers } from 'redux';
import categoriesReducer from './Categories';
import productsReducer from './Products';
import cartReducer from './Cart';

// Combine multiple reducers into a root reducer
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

// Create a store from the root reducer
const store = createStore(rootReducer);

export default store;