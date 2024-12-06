import { useReducer } from 'react';
import CartIcon from '../CartIcon';
import NavBar from '../NavBar';
import { initialState, reducer } from '../../stores/cartStore';

export default function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <header className='bg-slate-400 pb-3 flex justify-between'>
      <NavBar />
      <CartIcon cartLength={state.cart.reduce((sum, item) => sum + item.quantity, 0)} />
    </header>
  );
}
