import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import profile from "../assets/perfil.jpg";
import cvFile from "../assets/curriculo-lucas-evangelista.pdf";

const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-center p-8 bg-cover bg-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl text-center mx-auto md:text-6xl font-bold text-blue-600 mb-2">
          Lucas Evangelista.
        </h1>
        <h3 className="text-2xl text-center mx-auto md:text-4xl font-semibold mb-4">
          Front-end Developer
        </h3>
        <p className="text-gray-400 text-center mx-auto max-w-xl mb-6">
        Sou acadêmico em Análise e Desenvolvimento de Sistemas e, neste espaço, compartilho alguns dos projetos e trabalhos práticos que desenvolvi ao longo da minha trajetória. Fique à vontade para explorar meu portfólio e conhecer mais sobre minhas experiências.
        </p>
        <SocialLinks />
        <a
          href={cvFile}
          download
          className="block mt-6 px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors shadow-md mx-auto w-fit"
        >
          Download CV
        </a>
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profile}
          alt="Lucas Evangelista"
          className="w-72 h-72 rounded-full object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Home;
