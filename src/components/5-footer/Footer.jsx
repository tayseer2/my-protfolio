import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex">
      <ul className="flex">
        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <a
            target="_blank"
            href="https://www.instagram.com/tayseer_alrahhal?igsh=MWg4NWU3dmM2bW1mOQ=="
            className="icon icon-instagram"
          ></a>
          <a
            target="_blank"
            href="https://github.com/tayseer2"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/tayseer-alrahhal/"
            target="_blank"
            className="icon icon-linkedin"
          ></a>
        </div>
      </ul>
      <p className="copyRight">© {currentYear} Tayseer. All rights reserved.</p>
    </footer>
  );
}
