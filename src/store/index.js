// redux store hub
import {configureStore} from '@reduxjs/toolkit';

import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const store =() =>configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  }
});

export default store();

// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";


// let reducers = combineReducers({
 
// });

// const store = () => {
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

// export default store();