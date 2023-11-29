import GitHub from "../GitHub";

import "./index.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <img
          src="/k.svg"
          alt="App Logo"
          className="logo"
        />
        <p>Karan Chauhan</p>
      </div>
      <GitHub />
    </footer>
  );
}
