import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <div
      className={`flex justify-between items-center p-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md`}
    >
      <div>
        <p>&copy; Lucas Evangelista - 2025 | Todos os Direitos Reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
