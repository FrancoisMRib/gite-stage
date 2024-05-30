import { useState } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { LivreDor } from './pages/LivreDor';
import {Accueil} from './pages/Accueil';
import { DecReg } from './pages/DecouvRegion';
import { Reservation } from './pages/Reservation';
import { DecouvGite } from './pages/DecouvGite';
import { Contact } from './pages/Contact';
import { Localisation } from './pages/Localisation';
// import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        {/* < Accueil /> */}
        {/* <DecouvGite /> */}
        {/* <DecReg/> */}
        {/* <Contact /> */}
        {/* <Reservation /> */}
        <Localisation />
        {/* <LivreDor/> */}
        < Footer />
        {/* <a href="https://vitejs.dev" target="_blank">
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
        </p> */}
      </div>
    </>
  )
}

// export default App
