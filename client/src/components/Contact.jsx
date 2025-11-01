/*
  File: Contact.jsx
  Student: Benjamin Nguyen
  StudentID: 301468048
  Date: Sept 26, 2025
  Description: Contact page – includes contact info and a form for basic user input.
*/

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Contact form submission:', form)

    alert('Thanks! Your message was recorded. Returning to Home.')

    navigate('/')
  }

  return (
    <section style={{ maxWidth: 1100, margin: '60px auto', padding: '0 16px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: 20, color: '#1e3a8a', textAlign: 'center' }}>
        Contact Me
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
        }}
      >
        <aside
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            display: 'grid',
            gap: 12,
            height: 'fit-content'
          }}
        >
          <h3 style={{ margin: 0, color: '#0f172a' }}>Get in touch</h3>
          <p style={{ margin: 0, color: '#475569' }}>
            I’m open to class projects, collaboration, and learning opportunities.
          </p>
          <div style={{ marginTop: 8, display: 'grid', gap: 8 }}>
            <div><strong>Email:</strong> <a href="mailto:tngu1205@my.centennialcollege.ca">tngu1205@my.centennialcollege.ca</a></div>
            <div><strong>Phone:</strong> (647) 629-4719</div>
            <div><strong>Location:</strong> Toronto, ON</div>
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            display: 'grid',
            gap: 12
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 6, color: '#0f172a' }}>First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                placeholder="First name"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 6, color: '#0f172a' }}>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                placeholder="Last name"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 6, color: '#0f172a' }}>Contact Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 6, color: '#0f172a' }}>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, color: '#0f172a' }}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Type your message…"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 16px',
              background: '#1e3a8a',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #e5e7eb',
  outline: 'none',
  boxSizing: 'border-box'
}
