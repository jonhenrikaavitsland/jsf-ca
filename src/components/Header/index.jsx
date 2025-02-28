/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import CartIcon from "../CartIcon";
import NavBar from "../NavBar";
import { initialState, reducer } from "../../stores/cartStore";

export default function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <header className="bg-slate-400 px-5 flex items-center">
      <Logo />
      <NavBar />
      <CartIcon
        cartLength={state.cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-end">
      <img src="/cart-shopping-fast-solid.svg" alt="logo" className="h-14" />
      <span className="capitalize font-black font-serif italic text-4xl">
        quick shop
      </span>
    </div>
  );
}
