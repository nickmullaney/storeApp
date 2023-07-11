// redux store hub
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';


const store = () = createStore({
  
}



  let reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  });

// const store = () => {
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

export default store();