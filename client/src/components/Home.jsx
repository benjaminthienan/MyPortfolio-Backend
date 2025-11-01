/*
  File: Home.jsx
  Student: Benjamin Nguyen
  StudentID: 301468048
  Date: Sept 26, 2025
  Description: Home page – includes welcome message, mission statement, and links to key sections.
*/

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #fdfbfb 0%, #ffffff 100%)',
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        marginTop: 40
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: 12, color: '#1e3a8a' }}>
        <span style={{ color: '#0f172a' }}>Hi, I’m Benjamin Nguyen</span>
      </h1>

      <p style={{ fontSize: '1.2rem', marginBottom: 24, color: '#475569' }}>
        Welcome to my portfolio!  
        I’m a Centennial College student passionate about <strong>web development </strong>  
        and building applications that make an impact.
      </p>

      <p style={{ maxWidth: 600, margin: '0 auto 32px', color: '#334155', lineHeight: 1.6 }}>
        My mission is to grow as a developer by creating projects that combine creativity,  
        problem-solving, and modern technologies. I believe in learning by doing and sharing my journey.
      </p>

      <Link
        to="/about"
        style={{
          padding: '14px 28px',
          backgroundColor: '#1e3a8a',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
          transition: 'background 0.2s ease'
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#3748b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#1e3a8a')}
      >
        Learn More About Me →
      </Link>
    </section>
  )
}
