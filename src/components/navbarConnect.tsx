import "../css/navbar.css";
import { Link } from "react-router-dom";
import logoImage from "../images/logo.jpg";

export function Navbar() {
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
          <Link to="/connect">
            <a className="activeLink">Connect</a>
          </Link>
        </div>
      </div>
    </>
  )
}