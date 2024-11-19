import CartIcon from './CartIcon';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className='bg-slate-400 pb-3 flex justify-between'>
      <NavBar />
      <CartIcon />
    </header>
  );
}
