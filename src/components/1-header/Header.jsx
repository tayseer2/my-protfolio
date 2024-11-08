import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeButton, setActiveButton] = useState("/");
  const [showModel, setshowModel] = useState(false);

  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => setshowModel(true)}
      />
      <div />

      <nav>
        <ul className="flex">
          <li>
            <Link
              to="/"
              className={activeButton === "/" ? "active-btn" : ""}
              onClick={() => handleButtonClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeButton === "/about" ? "active-btn" : ""}
              onClick={() => handleButtonClick("/about")}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={activeButton === "projects" ? "active-btn" : ""}
              onClick={() => handleButtonClick("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={activeButton === "skills" ? "active-btn" : ""}
              onClick={() => handleButtonClick("skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              className={activeButton === "contact" ? "active-btn" : ""}
              onClick={() => handleButtonClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          settheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span style={{ color: "orange" }} className="icon-sun"></span>
        )}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => setshowModel(false)}
              />
            </li>
            <li>
              <Link
                to="/"
                className={activeButton === "/" ? "active-btn" : ""}
                onClick={() => handleButtonClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={activeButton === "/about" ? "active-btn" : ""}
                onClick={() => handleButtonClick("/about")}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={activeButton === "projects" ? "active-btn" : ""}
                onClick={() => handleButtonClick("projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={activeButton === "skills" ? "active-btn" : ""}
                onClick={() => handleButtonClick("skills")}
              >
                Skills
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className={activeButton === "contact" ? "active-btn" : ""}
                onClick={() => handleButtonClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
