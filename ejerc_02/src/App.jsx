import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TarjetaPerfil from "./TarjetaPerfil.jsx"
import perfil2 from './assets/avatarPerfil2.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="tarjeta">     
      {/* ... comentario react ... */}
      {/*
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
      */}
        <TarjetaPerfil
          nombre="Eric Heinhorn"
          edad={830}
          urlImagen={new URL('./assets/avatarPerfil1.jpeg', import.meta.url).href}
        />
        //Imagen renderizada pasando string del path como param constructor del objeto URL

        <TarjetaPerfil
          nombre="Gabriela Valdez"
          edad={125}
          urlImagen={perfil2}
        />
        //Imagen renderizada pasando perfil2 al component importando la imagen desde assets
      </div>



      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
