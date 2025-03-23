import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import comvesorImg from '../assets/conversor.png';
import barberImg from '../assets/barber.png';
import calculadorImg from '../assets/calculadora.png';
import ptImg from '../assets/previsaotempo.png';

const projectsData = [
  {
    id: 1,
    name: 'Conversor de Moedas',
    image: comvesorImg,
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
    projectLink: 'https://conversor-moedas-jade.vercel.app/',
    repoLink: 'https://github.com/lucasevangelistaa/conversor-moedas',
  },
  {
    id: 2,
    name: 'Barber Styles',
    image: barberImg,
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaBootstrap />],
    projectLink: 'https://lucasevangelistaa.github.io/barber/',
    repoLink: 'https://github.com/lucasevangelistaa/barber',
  },
  {
    id: 3,
    name: 'Calculadora de Notas',
    image: calculadorImg,
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    projectLink: 'https://lucasevangelistaa.github.io/notas/',
    repoLink: 'https://github.com/lucasevangelistaa/notas',
  },
  {
    id: 4,
    name: 'Previsão do Tempo',
    image: ptImg,
    technologies: [<FaHtml5 />, <FaCss3Alt />, <SiTailwindcss/>, <FaJs />, <FaReact />],
    projectLink: 'https://previsao-tempo-wf.vercel.app/',
    repoLink: 'https://github.com/lucasevangelistaa/previsao-tempo',
  },
];

export default function Projects({ darkMode }) {
  return (
    <section id='projects' className={`py-10  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h1 className="text-4xl font-bold text-center mb-10">Projetos</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="cards p-5 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-3 text-center">{project.name}</h3>
            <div className="flex gap-3 text-2xl text-blue-600 mb-4">
              {project.technologies.map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Projeto
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition-colors flex items-center gap-1"
              >
                <FaGithub /> Repositório
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
