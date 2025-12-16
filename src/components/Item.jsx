import { Link } from 'react-router-dom'

function Item({ producto }) {
  return (
    <div style={{ margin: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{producto.nombre}</h3>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item
