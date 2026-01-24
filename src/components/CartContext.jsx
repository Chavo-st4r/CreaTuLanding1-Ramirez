import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]) 

  const addItem = (item, qty) => {
    setCart(prev => {
      const i = prev.findIndex(p => p.id === item.id)
      if (i !== -1) {
        const next = [...prev]
        next[i] = { ...next[i], qty: Math.min(next[i].qty + qty, item.stock) }
        return next
      }
      return [...prev, { ...item, qty }]
    })
  }

  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id))
  const clearCart = () => setCart([])

  const totalUnits = useMemo(() => cart.reduce((a, p) => a + p.qty, 0), [cart])
  const totalPrice = useMemo(() => cart.reduce((a, p) => a + p.qty * p.price, 0), [cart])

  const value = { cart, addItem, removeItem, clearCart, totalUnits, totalPrice }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
