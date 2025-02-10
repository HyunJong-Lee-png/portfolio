import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ArrowUp from "./components/ArrowUp";
import Skills from "./components/Skills";
import Repository from "./components/Repository";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Repository />
      <Projects />
      <Contact />
      <ArrowUp />
    </div>
  );
};

export default App;