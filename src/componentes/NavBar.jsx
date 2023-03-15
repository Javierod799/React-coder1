import "./NavBar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";

function NavBar(){
    return (
   <nav>
        <ul>
            <li>
                <a href="">
                    <img src="/imgs/logo.jpg" alt="" />
                </a>
            </li>
            <li>
                <a href="">Nosotros</a>
            </li>
            <li>
                <a href="">Tienda</a>
            </li>
            <li>
                <a href="/">Contacto</a>
            </li>
            <li>
                <a><CartWidget /></a>
            </li>
        </ul>
        </nav> 
        )
    
}


export default NavBar;