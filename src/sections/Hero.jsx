import { FaInstagram, FaSquareBehance, FaDribbble, FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '4rem',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        textAlign: 'left',
      }}>
        <p style={{ color: '#f97316', fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.1em' }}>
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', lineHeight: '1.2' }}>
          Chethiya Nisheda Dalugama
        </h1>

        <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#f97316', marginBottom: '2rem' }}>
          Creative Designer & Developer
        </p>

        <p style={{ color: '#cbd5e1', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '35rem' }}>
          I create beautiful, user-friendly digital experiences that help businesses grow.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button style={{
            padding: '1rem 2rem',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ea580c')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#f97316')}
          >
            Hire Me
          </button>
          <button style={{
            padding: '1rem 2rem',
            border: '2px solid #f97316',
            color: 'white',
            backgroundColor: 'transparent',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.1)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Download CV
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/ChethiyaD" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #f97316',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f97316',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f97316'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#f97316'
          }}
          title="GitHub"
          >
            <FaGithub style={{ fontSize: '1.25rem' }} />
          </a>
          <a href="https://www.linkedin.com/in/chethiya-dalugama-a32b26313" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3b82f6',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#3b82f6'
          }}
          title="LinkedIn"
          >
            <FaLinkedin style={{ fontSize: '1.25rem' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #a855f7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a855f7',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#a855f7'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#a855f7'
          }}
          title="Instagram"
          >
            <FaInstagram style={{ fontSize: '1.25rem' }} />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #06b6d4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#06b6d4',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#06b6d4'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#06b6d4'
          }}
          title="Behance"
          >
            <FaSquareBehance style={{ fontSize: '1.25rem' }} />
          </a>
        </div>
      </div>
    </section>
  )
}
