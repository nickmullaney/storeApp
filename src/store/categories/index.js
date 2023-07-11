let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
};

function categoriesReducer(state = initialState, action) {
  switch(action.type){
    case 'CHANGE_PRODUCTS':
      return {
        ...state,
        activeCategory: action.payload, //send all the payload action to use it
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}


export default categoriesReducer;