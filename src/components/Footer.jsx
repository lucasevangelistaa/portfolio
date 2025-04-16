import React from "react";
import { motion as Motion } from "framer-motion";
import Logo from "../assets/logo.png";
import SocialLinks from "./SocialLinks";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-12 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Seção de direitos autorais */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <img
              src={Logo}
              alt="Logo Lucas Evangelista"
              className="w-16 h-16 object-contain rounded-lg"
            />
            <p
              className={`text-sm md:text-base ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } text-center md:text-left`}
            >
              &copy; {new Date().getFullYear()} Lucas Evangelista. Todos os
              direitos reservados.
            </p>
          </Motion.div>

          {/* Seção de links e contato */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <h3
              className={`text-lg font-medium ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Conecte-se comigo
            </h3>
            <SocialLinks darkMode={darkMode} />
            <a
              href="mailto:lucasevangelistadra@gmail.com"
              className={`text-sm ${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-800"
              } transition-colors`}
            >
              lucasevangelistadra@gmail.com
            </a>
          </Motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
