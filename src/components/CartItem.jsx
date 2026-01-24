import { useCart } from '../components/CartContext'

export default function CartItem({ item }) {
  const { removeItem } = useCart()
  return (
    <article className="cart-item">
      <h4>{item.title}</h4>
      <p>Cantidad: {item.qty}</p>
      <p>Subtotal: ${item.qty * item.price}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </article>
  )
}
