import { create } from 'zustand';

export const useStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await fetch('https://v2.api.noroff.dev/online-shop');
      const data = await response.json();
      set({ products: data.data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
}));
