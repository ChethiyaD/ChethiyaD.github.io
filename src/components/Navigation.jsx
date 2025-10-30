import { useState, useEffect } from 'react'
import { FaBars, FaXmark, FaSun, FaMoon } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { colors, isDark, toggleTheme } = useTheme()

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
    backgroundColor: isScrolled ? `${colors.bg}f5` : 'transparent',
    borderBottom: isScrolled ? `1px solid ${colors.border}` : 'none',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
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
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textDecoration: 'none',
    cursor: 'pointer',
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
    color: colors.text,
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  }

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#FF6B35',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
  }

  const themeButtonStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    border: `2px solid ${colors.primary}`,
    background: colors.bgSecondary,
    color: colors.primary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 15px ${colors.primary}40`,
  }

  const mobileButtonStyle = {
    background: 'none',
    border: 'none',
    color: colors.text,
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
                onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                onMouseLeave={(e) => (e.target.style.color = colors.text)}
              >
                {link.label}
              </a>
            ))}
            <button 
              style={buttonStyle} 
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#ea580c')} 
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF6B35')}
            >
              Let's Talk
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={themeButtonStyle}
              aria-label="Toggle theme"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(180deg)'
                e.currentTarget.style.boxShadow = `0 6px 20px ${colors.primary}60`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                e.currentTarget.style.boxShadow = `0 4px 15px ${colors.primary}40`
              }}
            >
              {isDark ? <FaSun /> : <FaMoon />}
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
            backgroundColor: `${colors.bg}f5`,
            borderBottom: `1px solid ${colors.border}`,
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
                    color: colors.text,
                    textDecoration: 'none',
                    borderRadius: '0.375rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.bgSecondary
                    e.target.style.color = colors.primary
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = colors.text
                  }}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  margin: '0.5rem 1rem',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: `2px solid ${colors.primary}`,
                  background: colors.bgSecondary,
                  color: colors.primary,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
              >
                {isDark ? <FaSun /> : <FaMoon />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
