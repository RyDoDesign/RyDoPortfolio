import "../css/navbar.css";
import { Link } from "react-router-dom";
import logoImage from "../images/logo.jpg";

export function NavbarPlay() {
  return (
    <>
      <div className="navbar">
        <div className="navLogo">
          <Link to="/">
            <img src={logoImage} />
          </Link>
        </div>
        <div className="navLinks">
          <Link to="/">
            <a>Work</a>
          </Link>
          <Link to="/play">
            <a className="activeLink">Play</a>
          </Link>
          <Link to="/connect">
            <a>Connect</a>
          </Link>
        </div>
      </div>
    </>
  )
}