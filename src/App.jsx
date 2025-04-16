import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const ToggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen`}
    >
      <Header darkMode={darkMode} ToggleDarkMode={ToggleDarkMode} />
      <Home darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
