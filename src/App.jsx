import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'
import NotFound from './components/NotFound'
import { CartProvider } from './components/CartContext'
import './App.css'



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <main>

          <Routes>
            {/* Ruta principal */}
            <Route
              path="/"
              element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />}
            />

            {/* Catálogo filtrado por categoría */}
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting="Catálogo por categoría" />}
            />

            {/* Vista detalle de producto */}
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />

            {/* Carrito */}
            <Route path="/cart" element={<Cart />} />

            {/* Checkout */}
            <Route path="/checkout" element={<CheckoutForm />} />

            {/* Ruta para manejar páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
