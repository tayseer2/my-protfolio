import About from "./components/6-about/About";
import Projects from "./components/7-projects/Projects";
import Skills from "./components/8-skills/Skills";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}
