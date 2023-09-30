import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Mainpage } from './components/Body/Mainpage'
import { Errorpage } from './components/Body/Errorpage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
