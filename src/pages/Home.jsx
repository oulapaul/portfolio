import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Home = () => {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div>
      <section style={styles.hero}>
        <div className="container" style={styles.heroContainer}>
          <h1 style={styles.title}>Hi, I'm OULA PAUL</h1>
          <p style={styles.subtitle}>
            I'm a full-stack developer passionate about building amazing web applications
            that solve real-world problems.
          </p>
          <Link to="/projects" className="btn" style={styles.cta}>
            View My Work
          </Link>
        </div>
      </section>

      <section style={styles.projectsSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={styles.grid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div style={styles.viewAll}>
            <Link to="/projects" style={styles.viewAllLink}>
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.skillsSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>My Skills</h2>
          <div style={styles.skillsGrid}>
            {['React', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Express', 'Git'].map((skill) => (
              <div key={skill} style={styles.skillCard}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  hero: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '80px 0',
    textAlign: 'center',
  },
  heroContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  cta: {
    backgroundColor: 'white',
    color: '#007bff',
    textDecoration: 'none',
  },
  projectsSection: {
    padding: '60px 0',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  viewAll: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  viewAllLink: {
    color: '#007bff',
    fontSize: '1.1rem',
    textDecoration: 'none',
  },
  skillsSection: {
    backgroundColor: '#f8f9fa',
    padding: '60px 0',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  skillCard: {
    backgroundColor: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#007bff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}

export default Home