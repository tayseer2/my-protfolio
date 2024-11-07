import Footer from "../5-footer/Footer";
import Header from "../1-header/Header";
import "./projects.css";

export default function Projects() {
  return (
    <div className="container">
      <Header />
      <section className="projects">
        <h1 className="title">
          The latest and best projects <br /> I have worked on.
        </h1>
        <p className="sub-title">
          I’ve worked on several projects over the years, but these are the ones
          I&apos;m most proud of.
        </p>
        <div className="box flex">
          <div className="firts ">
            <div className="image">
              <img src="/images/main/junior-logo.jpg" alt="" />
            </div>
            <p className="box-title">Junior</p>
            <p className="box-subtitle">
              Interactive chatbot built with React, designed for seamless user
              communication and smooth performance.
            </p>
            <a href="https://junior-v2.netlify.app/" className="links flex">
              <a
                href="https://junior-v2.netlify.app/"
                target="_blank"
                className="icon-link"
              ></a>
              <p className="link-name">Junior.ai</p>
            </a>
          </div>

          <div className="firts ">
            <div className="image">
              <img src="/images/main/shope.jpg" alt="" />
            </div>
            <p className="box-title">E-Commerce</p>
            <p className="box-subtitle">
              Responsive e-commerce website, built with React, optimized for
              speed and a seamless user experience.
            </p>
            <a href="https://shope-v2.netlify.app/" className="links flex">
              <a
                href="https://shope-v2.netlify.app/"
                target="_blank"
                className="icon-link"
              ></a>
              <p className="link-name">shope-v2.netlify.app</p>
            </a>
          </div>

          <div className="firts ">
            <div className="image">
              <img src="/images/main/my-design.jpeg" alt="" />
            </div>
            <p className="box-title">My Design</p>
            <p className="box-subtitle">
              Creative portfolio website, designed with React and Tailwind CSS,
              showcasing design projects and services.
            </p>
            <a href="https://my-design-v2.netlify.app/" className="links flex">
              <a
                href="https://my-design-v2.netlify.app/"
                target="_blank"
                className="icon-link"
              ></a>
              <p className="link-name">my-design-v2.netlify.app</p>
            </a>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <Footer />
    </div>
  );
}
