import { createStore, combineReducers } from 'redux';
import categoriesReducer from './Categories';
import productsReducer from './Products';

// Combine multiple reducers into a root reducer
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

// Create a store from the root reducer
const store = createStore(rootReducer);

export default store;
