const ProjectCard = ({ title, description, tech, image, demoLink, codeLink }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <div style={{ ...styles.image, backgroundColor: getColor(title) }}>
          <span style={styles.imageText}>{title.slice(0, 2)}</span>
        </div>
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.tech}>
          {tech.map((t, i) => (
            <span key={i} style={styles.techBadge}>{t}</span>
          ))}
        </div>
        <div style={styles.links}>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              Live Demo →
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const getColor = (str) => {
  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a']
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  imageContainer: {
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.8,
  },
  content: {
    padding: '1.5rem',
  },
  title: {
    marginBottom: '0.5rem',
    color: '#333',
  },
  description: {
    color: '#666',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  tech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  techBadge: {
    backgroundColor: '#e9ecef',
    padding: '4px 10px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    color: '#495057',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#007bff',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
}

export default ProjectCard