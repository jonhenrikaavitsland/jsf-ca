const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
const savedTotal = JSON.parse(localStorage.getItem("total")) || 0;

export const initialState = { cart: savedCart, total: savedTotal };

export function reducer(state, action) {
  let productIndex;
  let newTotal;
  let cart;

  const saveToLocalStorage = (cart, total) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
  };

  switch (action.type) {
    // Adding a product
    case "addProduct":
      // Create a new cart so we don't mutate our state
      cart = [...state.cart];
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (productIndex === -1) {
        // If productIndex is -1, it doesn't exist so we add it
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        // The product does exist so we increase the quantity
        // We do not want to mutate quantity so we are creating a new array with
        // quantity incremented.
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      saveToLocalStorage(cart, newTotal);
      return { ...state, cart: cart, total: newTotal };

    // Removing a product
    case "removeProduct":
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      // If the product index is not -1 then it exists
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          // Remove 1 from quantity is quantity is higher than 1
          // We do not want to mutate cart so we recreate it
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          // Remove the item entirely if quantity is going to be 0
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      saveToLocalStorage(cart, newTotal);
      return { ...state, cart: cart, total: newTotal };

    // Clearing a cart
    case "clearCart":
      saveToLocalStorage([], 0);
      return { cart: [], total: 0 };

    default:
      return state;
  }
}
