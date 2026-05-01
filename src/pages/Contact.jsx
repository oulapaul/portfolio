import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div style={styles.container}>
      <div className="container">
        <h1 style={styles.title}>Get In Touch</h1>
        <p style={styles.subtitle}>
          Have a project in mind? I'd love to hear about it!
        </p>

        <div style={styles.content}>
          <div style={styles.info}>
            <h3 style={styles.infoTitle}>Let's Connect</h3>
            <p style={styles.infoText}>
              Feel free to reach out for collaborations, freelance work,
              or just a friendly chat about tech!
            </p>
            <div style={styles.contactInfo}>
              <p>📧 oulapaulinda2004@gmail.com</p>
              <p>📱 0790214083</p>
              <p>📍 Nairobi, Kenya</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={styles.textarea}
              />
            </div>

            <button type="submit" className="btn" style={styles.button}>
              Send Message
            </button>

            {submitted && (
              <div style={styles.success}>
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '60px 0',
    minHeight: 'calc(100vh - 200px)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '3rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
  },
  info: {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '10px',
  },
  infoTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  infoText: {
    color: '#666',
    marginBottom: '2rem',
  },
  contactInfo: {
    lineHeight: '2',
    color: '#555',
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    resize: 'vertical',
  },
  button: {
    width: '100%',
  },
  success: {
    marginTop: '1rem',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '5px',
    textAlign: 'center',
  },
}

export default Contact