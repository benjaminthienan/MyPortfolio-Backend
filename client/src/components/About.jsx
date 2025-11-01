/*
  File: About.jsx
  Student: Benjamin Nguyen
  StudentID: 301468048
  Date: Sept 26, 2025
  Description: About Me page – includes headshot, name, short bio, and resume link.
*/

import headshot from '../assets/headshot.jpeg'   
import resume from '../assets/resume.pdf' 

export default function About() {
  return (
    <section
      style={{
        maxWidth: 900,
        margin: '60px auto',
        padding: 20,
        background: '#ffffff',
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}
    >
      <h2 style={{ fontSize: '2rem', margin: '0 0 20px', color: '#1e3a8a', textAlign: 'center' }}>
        About Me
      </h2>

      <div className="about-grid">
        <img
          src={headshot}
          alt="Benjamin Nguyen"
          style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #e0e7ff',
            display: 'block',
            margin: '0 auto'
          }}
        />

        <div className="about-text">
          <h3 style={{ margin: '0 0 12px', color: '#0f172a' }}>Benjamin Nguyen</h3>

          <p style={{ margin: '0 0 12px', lineHeight: 1.6, color: '#475569' }}>
            I’m a student at Centennial College studying <strong>Software Engineering Technology – Artificial Intelligence</strong>. 
            I’m passionate about web development, problem-solving, and building projects that make a positive impact.
          </p>

          <p style={{ margin: 0, lineHeight: 1.6, color: '#475569' }}>
            Outside of coding, I enjoy learning new technologies, exploring creative ideas, and working on personal projects
            that sharpen my skills. My goal is to keep growing as a developer while contributing to meaningful work.
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 16,
              padding: '12px 20px',
              backgroundColor: '#1e3a8a',
              color: '#fff',
              borderRadius: 6,
              textDecoration: 'none',
              fontWeight: 500
            }}
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  )
}
