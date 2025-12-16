import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/category/electronica">Electrónica</Link>
        <Link to="/category/ropa">Ropa</Link>
        <Link to="/category/hogar">Hogar</Link>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
