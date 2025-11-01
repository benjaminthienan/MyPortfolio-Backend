/*
  File: Navbar.jsx
  Student: Benjamin Nguyen
  StudentID: 301468048
  Date: Sept 26, 2025
  Description: Navigation bar – contains logo and links to all site pages.
*/

import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: 6,
    fontWeight: 500,
    color: isActive ? '#1e3a8a' : '#0f172a',
    backgroundColor: isActive ? '#e0e7ff' : 'transparent',
    transition: 'all 0.2s ease'
  })

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#ffffff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        zIndex: 1000,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 'max(24px, calc(env(safe-area-inset-right) + 32px))',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="BN Logo" width="40" height="40" />
          <span style={{ fontWeight: 600, fontSize: 18 }}>Benjamin Nguyen</span>
        </div>

        <nav style={{ display: 'flex', gap: 12 }}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About Me</NavLink>
          <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
          <NavLink to="/services" style={linkStyle}>Services</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact Me</NavLink>
        </nav>
      </div>
    </header>
  )
}
