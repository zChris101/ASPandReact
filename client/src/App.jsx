import React from 'react'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Person from './pages/Person.jsx'
import NotFound from './pages/NotFound.jsx'
import { Route, Routes } from 'react-router'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='person' element={<Person />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App