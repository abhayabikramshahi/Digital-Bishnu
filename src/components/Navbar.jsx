import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Refer", path: "/refer" },
  { name: "Book", path: "/book" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // close mobile menu on route change
  }, [location]);

  return (
    <nav className="bg-black text-gray-300 shadow-lg w-full z-50 border-b border-b-[#1b1b1b] fixed top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-10">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-red-400 transition-colors"
        >
          DIGITAL BISHNU
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group font-medium transition-colors hover:text-white"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 text-white flex flex-col gap-4 px-6 py-4 border-t border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="py-3 text-lg px-2 hover:bg-red-500 rounded transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
