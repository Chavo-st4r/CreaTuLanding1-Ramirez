import { useState } from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../components/CartContext'

export default function ItemDetail({ item }) {
  const { title, description, price, stock, thumbnail } = item
  const { addItem } = useCart()
  const [addedQty, setAddedQty] = useState(0)

  const handleAdd = (qty) => {
    setAddedQty(qty)
    addItem(item, qty)
  }

  return (
    <section className="container">
      <img src={thumbnail} alt={title} className="detail-img" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>Stock:</strong> {stock}</p>

      {addedQty === 0
        ? <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
        : <p>Agregado al carrito: {addedQty} unidad(es).</p>}
    </section>
  )
}
