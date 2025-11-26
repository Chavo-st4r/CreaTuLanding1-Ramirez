import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido a mi tienda!" />
      </main>
    </>
  )
}

export default App
