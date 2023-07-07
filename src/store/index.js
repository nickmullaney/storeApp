// redux store hub
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();