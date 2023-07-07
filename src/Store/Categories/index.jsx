// Action Types
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

// Action Creators
export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});


// Reducer
const initialState = {
  categories: [
    { id: 1, name: 'electronics', displayName: 'Electronics' },
    { id: 2, name: 'food', displayName: 'Food' },
    { id: 3, name: 'clothing', displayName: 'Clothing' },
    { id: 4, name: 'weapons', displayName: 'Weapons' },
  ],
  activeCategory: null,
};

// Selectors
export const getCategories = (state) => state.categories;
export const getActiveCategory = (state) => state.activeCategory;


const categoriesReducer = (state = initialState, action) => {
  console.log('Action:', action); // Log the action to see if it is being triggered
  switch (action.type) {
    case SELECT_CATEGORY:
      console.log('Selected Category:', action.payload); // Log the selected category
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
};


export default categoriesReducer;