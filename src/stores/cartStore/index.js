import { create } from "zustand";
import { persist } from "zustand/middleware";

const storage =
  typeof window !== "undefined" && window.localStorage
    ? window.localStorage
    : undefined;

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [], // Init store
      addToCart: (product) =>
        set((state) => {
          const isAlreadyInCart = state.cart.some(
            (item) => item.id === product.id,
          );
          if (isAlreadyInCart) {
            // If the product is already in the cart, do nothing
            return state;
          }
          // Add product to cart if it's not already present
          return { cart: [...state.cart, product] };
        }),
      emptyCart: () => set({ cart: [] }), // Clear the cart
    }),
    {
      name: "cart-storage", //key
      storage, // checks for localStorage
    },
  ),
);
