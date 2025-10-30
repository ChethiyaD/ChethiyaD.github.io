import { FaGithub, FaLinkedin, FaDribbble, FaTwitter } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { colors, isDark } = useTheme()

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/ChethiyaD', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/chethiya', label: 'LinkedIn' },
    { icon: FaDribbble, url: '#', label: 'Dribbble' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
  ]

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: colors.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDark 
          ? 'radial-gradient(ellipse at top, rgba(78, 215, 241, 0.05) 0%, transparent 50%)'
          : 'radial-gradient(ellipse at top, rgba(78, 215, 241, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
        }}>
          <div style={{
            maxWidth: '800px',
            animation: 'fadeInUp 0.8s ease-out',
          }}>
            <p style={{ 
              color: colors.primary, 
              fontSize: '0.95rem', 
              fontWeight: '600', 
              marginBottom: '1rem', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Hello, I'm
            </p>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              fontWeight: '700', 
              color: colors.text, 
              marginBottom: '1rem', 
              lineHeight: '1.1',
            }}>
              Chethiya Nisheda
            </h1>

            <div style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
              fontWeight: '600',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Creative Developer
              </span>
            </div>

            <p style={{ 
              fontSize: '1.1rem', 
              color: colors.textSecondary, 
              marginBottom: '2.5rem',
              lineHeight: '1.7',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Full-stack developer passionate about creating beautiful, functional web experiences. 
              Specializing in modern web technologies and user-centric design.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '3rem', 
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              <a
                href="#contact"
                style={{
                  padding: '1rem 2rem',
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 15px ${colors.primary}40`,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = `0 6px 20px ${colors.primary}60`
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = `0 4px 15px ${colors.primary}40`
                }}
              >
                Get In Touch
              </a>
              
              <a
                href="#projects"
                style={{
                  padding: '1rem 2rem',
                  border: `2px solid ${colors.primary}`,
                  color: colors.text,
                  backgroundColor: 'transparent',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.bgSecondary
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                View Projects
              </a>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              justifyContent: 'center',
            }}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      border: `2px solid ${colors.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.textSecondary,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontSize: '1.2rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary
                      e.currentTarget.style.color = colors.primary
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.primary}40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.border
                      e.currentTarget.style.color = colors.textSecondary
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  )
}
