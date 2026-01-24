import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true)
      try {
        const ref = doc(db, 'products', itemId)
        const snap = await getDoc(ref)
        if (snap.exists()) {
          setItem({ id: snap.id, ...snap.data() })
        } else {
          setItem(null)
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchItem()
  }, [itemId])

  if (loading) return <p>Cargando producto...</p>
  if (!item) return <p>Producto no encontrado</p>

  return <ItemDetail item={item} />
}
