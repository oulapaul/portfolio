import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={navbarStyles.navbar}>
      <div className="container" style={navbarStyles.container}>
        <Link to="/" style={navbarStyles.logo}>
          OULA PAUL
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={navbarStyles.hamburger}
        >
          ☰
        </button>

        <div style={{ 
          ...navbarStyles.navLinks, 
          ...(isOpen ? navbarStyles.navLinksOpen : {}) 
        }}>
          <NavLink to="/" style={({ isActive }) => ({ 
            ...navbarStyles.link, 
            ...(isActive ? navbarStyles.active : {}) 
          })}>
            Home
          </NavLink>
          <NavLink to="/projects" style={({ isActive }) => ({ 
            ...navbarStyles.link, 
            ...(isActive ? navbarStyles.active : {}) 
          })}>
            Projects
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ 
            ...navbarStyles.link, 
            ...(isActive ? navbarStyles.active : {}) 
          })}>
            About
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({ 
            ...navbarStyles.link, 
            ...(isActive ? navbarStyles.active : {}) 
          })}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

const navbarStyles = {
  navbar: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    gap: '1rem',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  active: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  hamburger: {
    display: 'none',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
}

export default Navbar