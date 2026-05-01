const About = () => {
  return (
    <div style={styles.container}>
      <div className="container">
        <h1 style={styles.title}>About Me</h1>
        
        <div style={styles.content}>
          <div style={styles.imageSection}>
            <div style={styles.avatar}>
              <span style={styles.avatarText}>OP</span>
            </div>
          </div>
          
          <div style={styles.textSection}>
            <h2 style={styles.subtitle}>Who am I?</h2>
            <p style={styles.paragraph}>
              I'm a passionate full-stack developer with over 5 years of experience
              building web applications. I love creating elegant solutions to complex
              problems and continuously learning new technologies.
            </p>
            
            <h2 style={styles.subtitle}>My Journey</h2>
            <p style={styles.paragraph}>
              I started coding during my college years and immediately fell in love
              with the creativity and problem-solving aspects of software development.
              Since then, I've worked with startups and large companies, helping them
              build scalable web applications.
            </p>
            
            <h2 style={styles.subtitle}>What I Do</h2>
            <ul style={styles.list}>
              <li>🌐 Full-stack web development (React, Node.js, Python)</li>
              <li>📱 Responsive and mobile-first design</li>
              <li>🚀 Performance optimization</li>
              <li>🤝 Team collaboration and code reviews</li>
            </ul>
          </div>
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
    marginBottom: '3rem',
    color: '#333',
  },
  content: {
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  imageSection: {
    flex: '1',
    minWidth: '250px',
  },
  avatar: {
    width: '250px',
    height: '250px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  avatarText: {
    fontSize: '4rem',
    color: 'white',
    fontWeight: 'bold',
  },
  textSection: {
    flex: '2',
    minWidth: '300px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    marginTop: '1.5rem',
    color: '#333',
  },
  paragraph: {
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
}

export default About