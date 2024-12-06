import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '.';

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

// CartProvider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ cart: state.cart, total: state.total, dispatch }}>{children}</CartContext.Provider>;
}
