import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'

export default function Navigation() {
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

  const menuContainerStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  }

  const linkStyle = {
    color: colors.text,
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
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

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          <a href="#hero" style={logoStyle}>
            Portfolio
          </a>

          <div style={menuContainerStyle}>
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
        </div>
      </div>
    </nav>
  )
}
