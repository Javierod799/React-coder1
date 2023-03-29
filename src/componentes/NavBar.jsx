import "./NavBar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">
        <li>
                <a href="">
                    <img src="/imgs/logo.jpg" alt="" />
                </a>
            </li>
        </Link>

        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/Dogpro">Dogpro</Link>
        </li>
        <li>
          <Link to="/category/CanActive">Can Active</Link>
        </li>
        <li>
          <Link to="/category/4Huellas">4 Huellas</Link>
        </li>
        <li>
                <a><CartWidget /></a>
            </li>
      </ul>
    </nav>
  );
}

export default NavBar;