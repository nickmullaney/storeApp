// actions.js

import { SELECT_CATEGORY, CHANGE_PRODUCTS, RESET_PRODUCTS } from './actionTypes';

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const changeProducts = (category) => ({
  type: CHANGE_PRODUCTS,
  payload: category,
});

export const resetProducts = () => ({
  type: RESET_PRODUCTS,
});
