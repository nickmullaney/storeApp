// Reducer

const initialState = {
  products: [
    { id: 1, category: 'electronics', name: 'TV', description: 'A 50 inch TV', price: 699.99 },
    { id: 2, category: 'electronics', name: 'Radio', description: 'A radio', price: 99.99 },
    { id: 3, category: 'food', name: 'Bread', description: 'A loaf of bread', price: 2.99 },
    { id: 4, category: 'food', name: 'Eggs', description: 'A dozen eggs', price: 1.99 },
    { id: 5, category: 'clothing', name: 'Shirt', description: 'A button up shirt', price: 9.99 },
    { id: 6, category: 'clothing', name: 'Pants', description: 'A pair of pants', price: 19.99 },
    { id: 7, category: 'weapons', name: 'Sword', description: 'A sword', price: 29.99 },
    { id: 8, category: 'weapons', name: 'Axe', description: 'An axe', price: 39.99 },
  ],
};

export const getProductsByCategory = (state, category) => {
  if (category && category.name) {
    console.log('Category:', category, 'State: ', state);
    return state.products.filter((product) => product.category === category.name);
  }
  return state.products;
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;