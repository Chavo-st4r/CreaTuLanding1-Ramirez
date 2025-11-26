import './NavBar.css'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>
      <div className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
