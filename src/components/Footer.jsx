const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <p>&copy; {new Date().getFullYear()} OULA PAUL. All rights reserved.</p>
        <div style={styles.social}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#fff',
    padding: '2rem 0',
    marginTop: 'auto',
    borderTop: '1px solid #e9ecef',
  },
  container: {
    textAlign: 'center',
  },
  social: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  socialLink: {
    color: '#666',
    transition: 'color 0.3s',
    textDecoration: 'none',
  },
}

export default Footer