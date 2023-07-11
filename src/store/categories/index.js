import axios from 'axios';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { GET, CHANGE_PRODUCTS } from '../constants.js';

export const setCategories = createAction(GET);

let categories = {
  categories:[]};

const categoriesReducer = createReducer(
  categories, {
  [GET]: (state, action) => {
    return action.payload;
  },
  [CHANGE_PRODUCTS]: (state, action) => {
    return {
      ...state,
      activeCategory: action.payload,
    }
  }
});

export const getAction = (payload) => {
  return {
    type: GET,
    payload: payload,
  }
}

export const getCategories = () => async (dispatch, getState) => {
  try {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    console.log('Inital Categories from API Call: ', response.data.results);
    dispatch(getAction(response.data.results));
  } catch (e) {
    console.log('Error Fetching Categories', e.message);
  }
}

export default categoriesReducer;
// let initialState = {
//   categories: [
//     { name: 'electronics', displayName: 'Electronics' },
//     { name: 'food', displayName: 'Food' },
//     { name: 'clothing', displayName: 'Clothing' },
//   ],
//   activeCategory: '',
// };

// function categoriesReducer(state = initialState, action) {
//   switch(action.type){
//     case 'CHANGE_PRODUCTS':
//       return {
//         ...state,
//         activeCategory: action.payload, //send all the payload action to use it
//     }
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }

