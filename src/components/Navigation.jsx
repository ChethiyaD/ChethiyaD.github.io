import { useState, useEffect } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: isScrolled ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
    borderBottom: isScrolled ? '1px solid rgb(31, 41, 55)' : 'none',
    transition: 'all 0.3s ease',
  }

  const containerStyle = {
    maxWidth: '80rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  }

  const navContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '4rem',
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
  }

  const desktopMenuStyle = {
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'flex',
    },
    gap: '2rem',
    alignItems: 'center',
  }

  const linkStyle = {
    color: '#d1d5db',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  }

  const buttonStyle = {
    padding: '0.5rem 1.5rem',
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }

  const mobileButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'none',
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          {/* Logo */}
          <a href="#hero" style={logoStyle}>
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div style={{ ...desktopMenuStyle, display: 'flex' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#f97316')}
                onMouseLeave={(e) => (e.target.style.color = '#d1d5db')}
              >
                {link.label}
              </a>
            ))}
            <button style={buttonStyle} onMouseEnter={(e) => (e.target.style.backgroundColor = '#ea580c')} onMouseLeave={(e) => (e.target.style.backgroundColor = '#f97316')}>
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ ...mobileButtonStyle, display: 'block', '@media (min-width: 768px)': { display: 'none' } }}
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            backgroundColor: 'rgba(17, 24, 39, 0.95)',
            borderBottom: '1px solid rgb(31, 41, 55)',
            padding: '0.5rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.5rem 1rem',
                    color: '#d1d5db',
                    textDecoration: 'none',
                    borderRadius: '0.375rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#f97316'
                    e.target.style.backgroundColor = 'rgb(31, 41, 55)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#d1d5db'
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button style={{ ...buttonStyle, width: '100%' }} onMouseEnter={(e) => (e.target.style.backgroundColor = '#ea580c')} onMouseLeave={(e) => (e.target.style.backgroundColor = '#f97316')}>
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
