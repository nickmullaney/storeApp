import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    removeFromCart: (state, action) => state.filter(product => product.name !== action.payload.name)
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;




// let initialState = {
//   cart: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         cart: [...state.cart, action.payload],
//       }
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cart: state.cart.filter(item => item.name !== action.payload.name),
//       }
//     default:
//       return state;
//   }
// }

// export default cartReducer;