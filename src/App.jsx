import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />

          {/* Catálogo filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />

          {/* Vista detalle de producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* Ruta 404 */}
          <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
