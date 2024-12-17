import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  console.log(menuOpen);

  return (
    <nav className="z-10">
      <div className="p-3 m-3">
        <button onClick={toggleMenu} className="h-8 w-8 lg:hidden">
          <img src="/burger-sharp-duotone-regular.svg" alt="menu" />
        </button>
      </div>
      <div
        className={
          menuOpen ? "absolute top-0 bg-slate-400 p-3" : "hidden lg:flex"
        }
      >
        <button onClick={toggleMenu} className="h-8 w-8 m-3 lg:hidden">
          <img src="/xmark-solid.svg" alt="close" />
        </button>
        <ul className="flex flex-col gap-6 mt-6 lg:mt-0 lg:flex-row p-3">
          <li>
            <NavLink
              to="/"
              className="p-2"
              onClick={() => {
                if (menuOpen) toggleMenu();
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact/"
              className="p-2"
              onClick={() => {
                if (menuOpen) toggleMenu();
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
