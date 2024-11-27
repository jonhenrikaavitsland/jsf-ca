import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }],
    })),
  incrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  decrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        (item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
        ).filter((item) => item.quantity > 0),
      ),
    })),
  emptyCart: () => set({ cart: [] }),
}));
