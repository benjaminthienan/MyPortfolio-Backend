/*
  File: Services.jsx
  Student: Benjamin Nguyen
  StudentID: 301468048
  Date: Sept 26, 2025
  Description: Services page – showcases areas of skill development with images and descriptions.
*/

import codeImg from "../assets/code.png"
import webImg from "../assets/web.jpg"
import databaseImg from "../assets/database.webp"

const services = [
  {
    title: "Frontend Development",
    img: webImg,
    desc: "Creating responsive layouts with HTML, CSS, and React. Comfortable with components, routing, and basic interactivity."
  },
  {
    title: "Programming Fundamentals",
    img: codeImg,
    desc: "Solving problems using Java, C#, and Python. Familiar with data structures, object-oriented programming, and debugging."
  },
  {
    title: "Database Design & SQL",
    img: databaseImg,
    desc: "Designing and querying small databases. Able to create tables, write SQL queries, and work with relationships."
  }
]

export default function Services() {
  return (
    <section style={{ maxWidth: 1100, margin: "60px auto", padding: "0 16px" }}>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: 20,
          color: "#1e3a8a",
          textAlign: "center"
        }}
      >
        Services
      </h2>

      <p style={{ textAlign: "center", color: "#475569", marginBottom: 24 }}>
        These are areas I’m currently developing skills in through my coursework
        and projects.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20
        }}
      >
        {services.map((s, i) => (
          <article
            key={i}
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 20,
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12
            }}
          >
            <img
            src={s.img}
            alt={s.title}
            style={{
                width: "100%",       
                height: "140px",     
                objectFit: "cover",  
                borderRadius: 12,
                border: "2px solid #e0e7ff"
            }}
            />
            <h3 style={{ margin: "8px 0 4px", color: "#0f172a" }}>{s.title}</h3>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.5 }}>
              {s.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
