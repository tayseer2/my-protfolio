import { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
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
              className={location.pathname === "/" ? "active-btn" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active-btn" : ""}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active-btn" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={location.pathname === "/skills" ? "active-btn" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active-btn" : ""}
            >
              Contact
            </Link>
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
                className={location.pathname === "/" ? "active-btn" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active-btn" : ""}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={
                  location.pathname === "/projects" ? "active-btn" : ""
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={location.pathname === "/skills" ? "active-btn" : ""}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active-btn" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
