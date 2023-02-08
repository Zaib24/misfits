import { createContext, useReducer } from 'react';

export const Store = createContext();

// Defining Reducer Actions
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      // adding items to cart
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, action.payload],
        },
      };
    default:
      return state;
  }
}

// Defining Initial Stage for Cart
const initialState = {
  cart: {
    cartItems: [],
  },
};
// Component for Passing Global Props to Children
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
