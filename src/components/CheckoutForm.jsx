import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useCart } from '../components/CartContext'

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart()
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setBuyer(prev => ({ ...prev, [name]: value }))
  }

  const submitOrder = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const order = {
        buyer,
        items: cart.map(({ id, title, price, qty }) => ({ id, title, price, qty })),
        total: totalPrice,
        createdAt: serverTimestamp(),
      }
      const ref = await addDoc(collection(db, 'orders'), order)
      setOrderId(ref.id)
      clearCart()
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <section className="container">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu id de orden es: <strong>{orderId}</strong></p>
      </section>
    )
  }

  return (
    <form className="container" onSubmit={submitOrder}>
      <h2>Checkout</h2>
      <input name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={buyer.email} onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} required />
      <button type="submit" disabled={loading || !cart.length}>
        {loading ? 'Generando orden...' : 'Confirmar compra'}
      </button>
    </form>
  )
}
