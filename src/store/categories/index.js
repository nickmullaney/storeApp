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

export const getCategories = () => async(dispatch) => {
  // Make our call to get categories from the database
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setInitialCategories(response.data.results));

}

export const { activeCategory, setInitialCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;


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


// export default categoriesReducer;