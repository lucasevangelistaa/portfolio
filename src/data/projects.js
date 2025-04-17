import conversorImg from '../assets/conversor.png';
import barberImg from '../assets/barber.png';
import calculadoraImg from '../assets/calculadora.png';
import previsaoImg from '../assets/previsaotempo.png';
import movieListImg from '../assets/movie-list.png';
import portfolioAcad from '../assets/portfolio-acad.png'
import drNutri from '../assets/drnutri.png'


export const techIcons = {
    HTML5: 'FaHtml5',
    CSS3: 'FaCss3Alt',
    JavaScript: 'FaJs',
    React: 'FaReact',
    Bootstrap: 'FaBootstrap',
    TailwindCSS: 'SiTailwindcss'
};

// Dados dos projetos
export const projectsData = [
    {
        id: 1,
        name: 'Portfólio Acadêmico',
        image: portfolioAcad,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TailwindCSS'],
        projectLink: 'https://amanda-portfolio-acad.vercel.app/',
        repoLink: 'https://github.com/lucasevangelistaa/amanda-portfolio',
        description: 'Modelo de portfólio acadêmico moderno e organizado.'
    },
    {
        id: 2,
        name: 'DR Nutricionista',
        image: drNutri,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TailwindCSS'],
        projectLink: 'https://dr-nutricionista.vercel.app/',
        repoLink: 'https://github.com/lucasevangelistaa/nutricionista',
        description: 'Modelo de site profissional para especialistas em nutrição.'
    },
    {
        id: 3,
        name: 'Conversor de Moedas',
        image: conversorImg,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
        projectLink: 'https://conversor-moedas-jade.vercel.app/',
        repoLink: 'https://github.com/lucasevangelistaa/conversor-moedas',
        description: 'Um conversor de moedas que utiliza API para obter cotações em tempo real.'
    },
    {
        id: 4,
        name: 'Barber Styles',
        image: barberImg,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        projectLink: 'https://lucasevangelistaa.github.io/barber/',
        repoLink: 'https://github.com/lucasevangelistaa/barber',
        description: 'Website para barbearia com agendamento online e galeria de trabalhos.'
    },
    {
        id: 5,
        name: 'Calculadora de Notas',
        image: calculadoraImg,
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        projectLink: 'https://lucasevangelistaa.github.io/notas/',
        repoLink: 'https://github.com/lucasevangelistaa/notas',
        description: 'Projeto desenvolvido durante o curso de TI no IFMA: uma calculadora intuitiva que auxilia estudantes a calcular as notas necessárias para alcançar a média de aprovação.'
    },
    {
        id: 6,
        name: 'Previsão do Tempo',
        image: previsaoImg,
        technologies: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'React'],
        projectLink: 'https://previsao-tempo-wf.vercel.app/',
        repoLink: 'https://github.com/lucasevangelistaa/previsao-tempo',
        description: 'Aplicativo de previsão do tempo com busca por cidade e exibição de dados meteorológicos.'
    },
    {
        id: 7,
        name: 'Lista de Filmes',
        image: movieListImg,
        technologies: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'React'],
        projectLink: 'https://movie-list-ml.vercel.app/',
        repoLink: 'https://github.com/lucasevangelistaa/movie-list',
        description: 'Catálogo de filmes com busca, filtros e favoritos utilizando API de filmes.'
    }
];