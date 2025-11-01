/*
  File: Projects.jsx
  Student: Benjamin Nguyen
  StudentID: 301468048
  Date: Sept 26, 2025
  Description: Projects page – highlights 3 projects with images, roles, and outcomes.
*/

import portfolioImg from '../assets/portfolio.jpeg'
import todoImg from '../assets/todo.avif'
import weatherImg from '../assets/weather.webp'

const projects = [
  {
    title: 'Personal Portfolio Website',
    img: portfolioImg,
    role: 'Design & Development (React + Vite)',
    outcome:
      'Designed and developed a responsive personal portfolio website using React and Vite. Implemented client-side routing with React Router, created a custom navigation bar with a personal logo, and applied consistent styling for a professional look. This site serves as a central hub to showcase my skills, background, and projects to prospective employers.'
  },
  {
    title: 'Todo List App',
    img: todoImg,
    role: 'Frontend Developer (React)',
    outcome:
      'Built a functional task management application that allows users to add, edit, complete, and delete tasks. Integrated local storage to persist data across sessions. Focused on building clean, reusable React components and handling state effectively. This project helped me practice CRUD operations and improve user experience with simple UI design.'
  },
  {
    title: 'Weather App',
    img: weatherImg,
    role: 'Frontend Developer (React + API)',
    outcome:
      'Developed a weather forecasting application that fetches real-time data from an external API. Implemented dynamic UI updates based on user input and integrated responsive design for mobile and desktop users. This project strengthened my understanding of API consumption, asynchronous JavaScript, and error handling in web applications.'
  }
]

export default function Projects() {
  return (
    <section style={{ maxWidth: 1200, margin: '60px auto', padding: '0 16px' }}>
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: 20,
          color: '#1e3a8a',
          textAlign: 'center'
        }}
      >
        Projects
      </h2>

      <p style={{ textAlign: 'center', color: '#475569', marginBottom: 24 }}>
        A few highlights of the projects I’ve built as part of my learning
        journey in web development.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: 20
        }}
      >
        {projects.map((p, i) => (
          <article
            key={i}
            style={{
              background: '#fff',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{ width: '100%', height: 200, objectFit: 'cover' }}
            />
            <div style={{ padding: 16, display: 'grid', gap: 8 }}>
              <h3 style={{ margin: 0, color: '#0f172a' }}>{p.title}</h3>
              <p style={{ margin: 0, color: '#334155' }}>
                <strong>Role:</strong> {p.role}
              </p>
              <p style={{ margin: 0, color: '#475569', lineHeight: 1.5 }}>
                <strong>Outcome:</strong> {p.outcome}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
