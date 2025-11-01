/*
  File: App.jsx
  Student: Benjamin Nguyen
  StudentID: 301468048
  Date: Sept 26, 2025
  Description: Root app component – sets up routing and renders the navbar + pages.
*/

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'          
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'      
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: 80, paddingLeft: 16, paddingRight: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
    </div>
  )
}
