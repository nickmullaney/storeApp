import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: '',
  },
  reducers: {
    activeCategory: (state, action) => {
      return { ...state, activeCategory: action.payload }
    },
    setInitialCategories: (state, action) => {
      state.categories = action.payload;
    }
  }
});

export const getCategories = () => async (dispatch) => {
  try {
    // Make our call to get categories from the database
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(setInitialCategories(response.data.results));
  } catch (e) {
    console.log('Error fetching categories:', e.message);
  }
}

export const { activeCategory, setInitialCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
