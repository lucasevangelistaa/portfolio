import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaPhp, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";

const Skills = ({ darkMode }) => {
  const skills = [
    { icon: <FaHtml5 className="text-7xl text-blue-700" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-7xl text-blue-700" />, name: "CSS3" },
    { icon: <FaJs className="text-7xl text-blue-700" />, name: "JavaScript" },
    { icon: <FaReact className="text-7xl text-blue-700" />, name: "React.js" },
    { icon: <SiVite className="text-7xl text-blue-700" />, name: "Vite" },
    { icon: <FaBootstrap className="text-7xl text-blue-700" />, name: "Bootstrap" },
    { icon: <SiTailwindcss className="text-7xl text-blue-700" />, name: "TailwindCSS" },
    { icon: <FaPhp className="text-7xl text-blue-700" />, name: "PHP" },
    { icon: <FaDatabase className="text-7xl text-blue-700" />, name: "SQL" },
    { icon: <FaPython className="text-7xl text-blue-700" />, name: "Python" },
  ];

  return (
    <section id="skills" className={`py-20 px-4 text-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}}`}>
      <h1 className="text-4xl font-bold mb-12 ">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 ">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-2 font-medium ">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
