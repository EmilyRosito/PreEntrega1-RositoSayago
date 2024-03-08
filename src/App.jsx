import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotonComponente from './componentes/BotonComponente'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'

function App() {

  return (
    <>
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" /> {/* Utilizar el componente ItemListContainer con un mensaje de bienvenida */}
    <BotonComponente/>
    <NavBar/>

    </>
  )
}

export default App
