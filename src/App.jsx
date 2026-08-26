import { useState } from 'react'
import './App.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or reach out via email.')
      }
    } catch (err) {
      setError(err.message || 'Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return <div className="form-confirmation">Thanks, I'll get back to you.</div>
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: 'none' }}>
        <label>
          Don’t fill this out if you're human:{' '}
          <input
            name="bot-field"
            onChange={handleChange}
            value={formData['bot-field']}
          />
        </label>
      </p>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
        />
      </div>

      {error && <div className="form-error">{error}</div>}

      <button type="submit" disabled={isSubmitting} className="form-submit">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

function App() {
  return (
    <div className="frame">
      <div className="accent-bar" />
      <h1>Abu Bakar Huzaifa</h1>
      <p className="claim">I build backend systems I can defend, line by line.</p>
      <nav className="links">
        <a href="https://linkedin.com/in/abubakarhuzaifa" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/a-b-huzaifa" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:darkking999@gmail.com">Book a call</a>
      </nav>
      <ContactForm />
      <div className="status">Portfolio build in progress — case studies coming next.</div>
    </div>
  )
}

export default App

