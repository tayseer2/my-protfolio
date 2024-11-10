import Header from "../1-header/Header";
import Footer from "../5-footer/Footer";
import "./skills.css";

export default function Skills() {
  return (
    <div className="container">
      <Header />

      <div className="skills-section">
        <div className="skill-word">SKILLS</div>
        <div className="icons-container">
          <div className="skills-icon">
            <img width={"40px"} src="/skills/css-3.png" alt="" />
          </div>
          <div className="skills-icon">
            <img width={"40px"} src="/skills/html.png" alt="" />
          </div>
          <div className="skills-icon">
            <img width={"40px"} src="/skills/js.png" alt="" />
          </div>
          <div className="skills-icon">
            <img width={"40px"} src="/skills/idea.png" alt="" />
          </div>
          <div className="skills-icon">
            <img width={"40px"} src="/skills/redux.1024x971.png" alt="" />
          </div>
          <div className="skills-icon">
            <img width={"40px"} src="/skills/Tailwind CSS.png" alt="" />
          </div>
          <div className="skills-icon">
            <img width={"40px"} src="/skills/structure.png" alt="" />
          </div>
          <div className="skills-icon">
            <img width={"40px"} src="/skills/git.png" alt="" />
          </div>
        </div>
      </div>

      <div className="divider"></div>
      <Footer />
    </div>
  );
}
