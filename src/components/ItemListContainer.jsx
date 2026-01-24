import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'
import ItemList from './ItemList'

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const colRef = collection(db, 'products')
        const q = categoryId ? query(colRef, where('category', '==', categoryId)) : colRef
        const snap = await getDocs(q)
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        setItems(data)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [categoryId])

  return (
    <section>
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> :
        items.length ? <ItemList productos={items} /> : <p>No hay productos.</p>}
    </section>
  )
}
