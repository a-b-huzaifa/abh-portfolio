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
        <a href="https://drive.google.com/file/d/1KkABcOMnUBONgfhWleJEDmDj-TJo4A67/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        <a href="mailto:darkking999@gmail.com">Book a call</a>
      </nav>

      <section className="work-section">
        <h2>Work</h2>

        <article className="project-card">
          <h3>Job Application Truth Tracker</h3>
          <p className="project-line">
            <strong className="line-label">Problem:</strong> Running a high-volume job application campaign across multiple platforms meant applications and resume versions were scattered with no way to track what was sent or needed follow-up.
          </p>
          <p className="project-line">
            <strong className="line-label">What I did:</strong> Built a Node/Express + Postgres service that logs every application as a structured record, documented for full traceability.
          </p>
          <p className="project-line">
            <strong className="line-label">Result:</strong> A single source of truth for the whole campaign instead of guessing what's pending.
          </p>
        </article>

        <article className="project-card">
          <h3>Usage Metering & Billing Service</h3>
          <p className="project-line">
            <strong className="line-label">Problem:</strong> Needed to prove a Stripe-style billing pipeline without production Stripe access.
          </p>
          <p className="project-line">
            <strong className="line-label">What I did:</strong> Built a self-contained HMAC-signed mock webhook system to simulate real payment events and test the billing logic end to end.
          </p>
          <p className="project-line">
            <strong className="line-label">Result:</strong> A working, testable billing pipeline independent of the missing piece, with the workaround documented.
          </p>
        </article>
      </section>

      <ContactForm />
      <div className="status">Portfolio build in progress — case studies coming next.</div>
    </div>
  )
}

export default App

