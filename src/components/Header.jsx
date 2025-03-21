import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = ({ darkMode, ToggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const menuItems = ["Home", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`w-full flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md fixed top-0 z-50`}
    >
      <button onClick={ToggleDarkMode} className="text-2xl text-blue-700">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <nav className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`$${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-800 hover:text-blue-700"
            } font-medium`}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="md:hidden flex items-center gap-4">
        <div
          className="text-3xl cursor-pointer text-blue-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed top-0 right-0 w-2/3 h-full ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } shadow-xl flex flex-col items-center justify-center gap-8 text-xl z-40`}
        >
          <div
            className="absolute top-4 right-4 text-3xl cursor-pointer text-blue-700"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
