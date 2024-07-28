import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>
      <p className="copyRight">© {currentYear} Tayseer. All rights reserved.</p>
    </footer>
  );
}
