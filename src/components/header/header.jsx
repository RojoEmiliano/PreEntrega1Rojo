import './header.scss'
import { Clicker } from '../CarritoClicker/carrito';
import { FaShoppingCart } from "react-icons/fa";


function Header({counter}) {
  return (
  <header className="header">
    <div className="header__container">
      <h1 className="header__logo">LOGO</h1>
      <nav className="header__nav">
          <a className="header__link" href="">Inicio</a>
          <a className="header__link" href="">Productos</a>
          <a className="header__link" href="">Sobre Nosotros</a>
          <a className="header__link" href="">Contacto</a>
          <FaShoppingCart />
          <span>  {counter}</span>
      </nav>
    </div>
  </header>
  );
}

export default Header;

