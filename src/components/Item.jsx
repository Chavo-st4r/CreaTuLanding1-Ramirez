import { Link } from 'react-router-dom'

export default function Item({ producto }) {
  const { id, title, price, thumbnail } = producto
  return (
    <article className="card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </article>
  )
}
