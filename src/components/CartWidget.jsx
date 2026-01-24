import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'

export default function CartWidget() {
  const { totalUnits } = useCart()
  return (
    <Link to="/cart" className="cart-widget">
      🛒 <span>{totalUnits}</span>
    </Link>
  )
}
