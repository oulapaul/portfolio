import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <div style={styles.container}>
      <div className="container">
        <h1 style={styles.title}>My Projects</h1>
        <p style={styles.subtitle}>
          Here are some of the projects I've worked on. Each project represents
          different challenges and learning experiences.
        </p>
        <div style={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
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
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
}

export default Projects
