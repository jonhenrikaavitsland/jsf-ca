import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [], // store only 1 max of each item for this store
  addToCart: (product) =>
    set((state) => {
      const isAlreadyInCart = state.cart.some((item) => item.id === product.id);
      if (isAlreadyInCart) {
        // If the product is already in the cart, do nothing
        return state;
      }
      // Add product to cart if it's not already present
      return { cart: [...state.cart, product] };
    }),
  emptyCart: () => set({ cart: [] }), // Clear the cart
}));
