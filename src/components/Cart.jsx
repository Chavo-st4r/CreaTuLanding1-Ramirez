import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import CartItem from './CartItem'

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCart()

  if (!cart.length) {
    return (
      <section className="container">
        <h2>Carrito vacío</h2>
        <Link to="/">Ir al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="container">
      <h2>Tu carrito</h2>
      {cart.map(p => <CartItem key={p.id} item={p} />)}
      <h3>Total: ${totalPrice}</h3>
      <div className="row">
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn">Continuar al checkout</Link>
      </div>
    </section>
  )
}
