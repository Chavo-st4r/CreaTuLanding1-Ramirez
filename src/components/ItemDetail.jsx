function ItemDetail({ producto }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '2rem', margin: '1rem auto', maxWidth: '400px' }}>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail
