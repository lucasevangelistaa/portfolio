import { motion as Motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/projects";
import { techIcons } from "../data/projects";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Mapeamento de ícones
const iconComponents = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  FaBootstrap: FaBootstrap,
  SiTailwindcss: SiTailwindcss,
};

const Projects = ({ darkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <section
      id="projects"
      className={`py-20 px-4 md:px-8 lg:px-16 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Meus <span className="text-blue-600">Projetos</span>
        </Motion.h2>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <Motion.div
              key={project.id}
              variants={item}
              whileHover="hover"
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-md hover:shadow-xl`}
            >
              <div className="relative group h-48 overflow-hidden">
                <Motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Motion.a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={`Ver projeto ${project.name}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </Motion.a>
                  <Motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={`Ver repositório ${project.name}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </Motion.a>
                </div>
              </div>

              <div
                className={`p-6 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm mb-4 opacity-80">{project.description}</p>

                <div className="flex justify-center">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => {
                      const iconName = techIcons[tech];
                      const IconComponent = iconComponents[iconName];
                      return (
                        <Motion.div
                          key={tech}
                          whileHover={{ y: -5, scale: 1.1 }}
                          className={`p-3 rounded-full ${
                            darkMode ? "bg-gray-700" : "bg-gray-100"
                          }`}
                          title={tech} // Adiciona tooltip com o nome da tecnologia
                        >
                          <IconComponent className="text-xl" />
                        </Motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
