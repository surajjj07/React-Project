import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
function App() {
 
  return (
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/contact' element={<Contact/>} />
   </Routes>
      

  )
}

export default App
