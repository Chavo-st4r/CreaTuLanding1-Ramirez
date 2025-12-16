import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import './ItemListContainer.css'

const productos = [
  { id: 1, nombre: 'Celular', categoria: 'electronica' },
  { id: 2, nombre: 'Notebook', categoria: 'electronica' },
  { id: 3, nombre: 'Remera', categoria: 'ropa' },
  { id: 4, nombre: 'Mesa', categoria: 'hogar' },
]

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 1000)
    })

    getProductos.then((res) => {
      if (categoryId) {
        setItems(res.filter((prod) => prod.categoria === categoryId))
      } else {
        setItems([]) // no mostrar productos en la ruta "/"
      }
    })
  }, [categoryId])

  return (
    <section className="welcome-container">
      <h2>{greeting}</h2>
      {categoryId && (
        <div className="items-list">
          {items.map((prod) => (
            <Item key={prod.id} producto={prod} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ItemListContainer
