import { motion as Motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import profile from "../assets/perfil.jpg";
import cvFile from "../assets/curriculo-lucas-evangelista.pdf";

const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center p-8 md:p-12 lg:p-16 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 to-white"
      }`}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <Motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-4 pb-2"
          >
            Lucas Evangelista
          </Motion.h1>

          <Motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-xl md:text-2xl lg:text-3xl font-medium mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Desenvolvedor Front-end
          </Motion.h3>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Graduando em Ciência da Computação. Aqui compartilho meus projetos e
            experiências profissionais. Explore meu portfólio para conhecer meu
            trabalho e habilidades.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <SocialLinks />
            <Motion.a
              href={cvFile}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              Baixar CV
            </Motion.a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div
              className={`absolute -inset-4 rounded-full ${
                darkMode
                  ? "bg-gradient-to-r from-blue-900 to-blue-600"
                  : "bg-gradient-to-r from-blue-200 to-blue-100"
              } opacity-70 blur-xl`}
            ></div>
            <img
              src={profile}
              alt="Lucas Evangelista"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Home;
