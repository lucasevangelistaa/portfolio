import { motion as Motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiVercel, SiFirebase } from "react-icons/si";
import { FaCogs } from "react-icons/fa";

const skills = [
  {
    icon: <FaHtml5 className="text-5xl" />,
    name: "HTML5",
    color: "text-orange-500",
  },
  {
    icon: <FaCss3Alt className="text-5xl" />,
    name: "CSS3",
    color: "text-blue-500",
  },
  {
    icon: <FaJs className="text-5xl" />,
    name: "JavaScript",
    color: "text-yellow-400",
  },
  {
    icon: <FaReact className="text-5xl" />,
    name: "React.js",
    color: "text-blue-400",
  },
  {
    icon: <SiVite className="text-5xl" />,
    name: "Vite",
    color: "text-purple-500",
  },
  {
    icon: <FaBootstrap className="text-5xl" />,
    name: "Bootstrap",
    color: "text-purple-700",
  },
  {
    icon: <SiTailwindcss className="text-5xl" />,
    name: "TailwindCSS",
    color: "text-cyan-400",
  },
  {
    icon: <FaCogs className="text-5xl" />,
    name: "API",
    color: "text-gray-400",
  },
  {
    icon: <SiFirebase className="text-5xl" />,
    name: "Firebase",
    color: "text-orange-600",
  },
  {
    icon: <SiVercel className="text-5xl" />,
    name: "Vercel",
    color: "text-black",
  },
];

const Skills = ({ darkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="skills"
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
          Minhas <span className="text-blue-600">Habilidades</span>
        </Motion.h2>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <Motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } shadow-md hover:shadow-lg`}
            >
              <div className={`${skill.color} mb-4`}>{skill.icon}</div>
              <span
                className={`font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {skill.name}
              </span>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
