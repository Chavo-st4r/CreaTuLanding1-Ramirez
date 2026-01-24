import Item from './Item'

export default function ItemList({ productos }) {
  return (
    <div className="grid">
      {productos.map(p => <Item key={p.id} producto={p} />)}
    </div>
  )
}
