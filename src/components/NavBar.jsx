import { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav>
      <div className='p-3'>
        <button onClick={toggleMenu} className='h-8 w-8 lg:hidden'>
          <img src='/burger-sharp-duotone-regular.svg' alt='menu' />
        </button>
      </div>
      <div className={menuOpen ? 'absolute top-0 bg-slate-400 p-3' : 'hidden lg:flex'}>
        <button onClick={toggleMenu} className='h-8 w-8 lg:hidden'>
          <img src='/xmark-solid.svg' alt='close' />
        </button>
        <ul className='flex flex-col gap-2 lg:flex-row lg:gap-4 p-3'>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
