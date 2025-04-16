import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = ({ darkMode, ToggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`w-full flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md fixed top-0 z-50`}
    >
      <button onClick={ToggleDarkMode} className="text-2xl text-blue-700">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Navegação desktop */}
      <nav className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-80}
            className={`${
              darkMode
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-800 hover:text-blue-700"
            } font-medium cursor-pointer transition-colors`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Menu hambúrguer mobile */}
      <button
        className="md:hidden text-3xl cursor-pointer text-blue-700"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Overlay escuro */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />

          {/* Conteúdo do menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute right-0 top-0 h-full w-3/4 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            } shadow-xl flex flex-col items-center justify-center gap-8 text-xl`}
          >
            <button
              className="absolute top-4 right-4 text-3xl cursor-pointer text-blue-700"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <FaTimes />
            </button>

            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className={`${
                  darkMode
                    ? "text-white hover:text-blue-400"
                    : "text-gray-900 hover:text-blue-700"
                } font-semibold cursor-pointer transition-colors text-2xl`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
