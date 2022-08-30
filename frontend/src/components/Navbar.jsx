import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import "../App.css";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header>
      <h1 className="text-3xl m-[2rem]">Shiny Potato</h1>
      <nav className="navBar">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#000", width: "40px", height: "40px" }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link
              to="/"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="/la-carte"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              La carte
            </Link>
          </li>
          <li>
            <Link
              to="/actualites"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Nos actus
            </Link>
          </li>
          <li>
            <Link
              to="/nous-trouver"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Nous trouver
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
