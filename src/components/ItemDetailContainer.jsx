import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const productos = [
  { id: 1, nombre: 'Celular', categoria: 'electronica', descripcion: 'Celular gama media con buena cámara' },
  { id: 2, nombre: 'Notebook', categoria: 'electronica', descripcion: 'Notebook potente para trabajo y gaming' },
  { id: 3, nombre: 'Remera', categoria: 'ropa', descripcion: 'Remera de algodón 100% cómoda' },
  { id: 4, nombre: 'Mesa', categoria: 'hogar', descripcion: 'Mesa de madera maciza para comedor' },
]

function ItemDetailContainer() {
  const { itemId } = useParams()   
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const getProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((p) => p.id === parseInt(itemId)))
      }, 1000)
    })

    getProducto.then((res) => setProducto(res))
  }, [itemId])

  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando producto...</p>}
    </section>
  )
}

export default ItemDetailContainer
