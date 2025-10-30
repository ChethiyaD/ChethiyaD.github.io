import { FaGithub, FaLinkedin, FaDribbble, FaTwitter } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import profileImage from '../../docs/assets/Che.png'

export default function Hero() {
  const { colors, isDark } = useTheme()
  const [ref, isVisible] = useScrollAnimation(0.1)

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
        <div 
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            '@media (min-width: 768px)': {
              gridTemplateColumns: '1.2fr 1fr',
            }
          }}
        >
          {/* Left Content */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.8s ease-out',
          }}>
            <p style={{ 
              color: colors.primary, 
              fontSize: '0.95rem', 
              fontWeight: '600', 
              marginBottom: '1rem', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              animation: 'fadeInUp 0.6s ease-out 0.2s both',
            }}>
              HELLO, I'M
            </p>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '700', 
              color: colors.text, 
              marginBottom: '1rem', 
              lineHeight: '1.1',
              animation: 'fadeInUp 0.6s ease-out 0.4s both',
            }}>
              Chethiya Nisheda
            </h1>

            <div style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
              fontWeight: '600',
              marginBottom: '1.5rem',
              animation: 'fadeInUp 0.6s ease-out 0.6s both',
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
              animation: 'fadeInUp 0.6s ease-out 0.8s both',
            }}>
              Full-stack developer passionate about creating beautiful, functional web experiences. 
              Specializing in modern web technologies and user-centric design.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '2rem', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.6s ease-out 1s both',
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
              animation: 'fadeInUp 0.6s ease-out 1.2s both',
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
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
                      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.primary}40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.border
                      e.currentTarget.style.color = colors.textSecondary
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
            transition: 'all 0.8s ease-out 0.4s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              animation: 'float 6s ease-in-out infinite',
            }}>
              {/* Glowing background effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                height: '85%',
                background: `radial-gradient(circle, ${colors.primary}40 0%, transparent 70%)`,
                filter: 'blur(40px)',
                animation: 'pulse 4s ease-in-out infinite',
              }} />
              
              <img 
                src={profileImage}
                alt="Chethiya Nisheda" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '2rem',
                  boxShadow: isDark 
                    ? `0 20px 60px ${colors.primary}30`
                    : `0 20px 60px ${colors.primary}20`,
                  border: `3px solid ${colors.border}`,
                  position: 'relative',
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) translateY(-5px)'
                  e.target.style.boxShadow = `0 25px 70px ${colors.primary}40`
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) translateY(0)'
                  e.target.style.boxShadow = isDark 
                    ? `0 20px 60px ${colors.primary}30`
                    : `0 20px 60px ${colors.primary}20`
                }}
              />
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

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              opacity: 0.8;
              transform: translate(-50%, -50%) scale(1.1);
            }
          }

          @media (max-width: 768px) {
            ${ref.current && ref.current.parentElement ? `
              ${ref.current.parentElement.querySelector('div:first-child')} {
                grid-template-columns: 1fr !important;
              }
            ` : ''}
          }
        `}
      </style>
    </section>
  )
}
