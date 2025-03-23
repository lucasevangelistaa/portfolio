import React from "react";
import Logo from "../assets/logo.png";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full p-6 md:p-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-inner`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            &copy; Lucas Evangelista - 2025 | Todos os Direitos Reservados.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={Logo}
            alt="Logo Lucas Evangelista"
            className="w-16 md:w-16 transition-transform duration-300 hover:scale-105 rounded-xl"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
