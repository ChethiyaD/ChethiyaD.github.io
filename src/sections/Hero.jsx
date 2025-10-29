import { FaInstagram, FaSquareBehance, FaDribbble, FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Hero() {
  // Sparkle component
  const Sparkle = ({ delay, size, top, left }) => (
    <div style={{
      position: 'absolute',
      top,
      left,
      width: size,
      height: size,
      backgroundColor: '#FFFA8D',
      borderRadius: '50%',
      animation: `twinkle 3s ease-in-out infinite`,
      animationDelay: delay,
      boxShadow: '0 0 10px #FFFA8D',
    }} />
  );

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #A8F1FF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(78, 215, 241, 0.1), rgba(111, 230, 252, 0.1), rgba(168, 241, 255, 0.1), rgba(255, 250, 141, 0.1))',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        pointerEvents: 'none',
      }} />

      {/* Sparkles */}
      <Sparkle delay="0s" size="8px" top="20%" left="10%" />
      <Sparkle delay="0.5s" size="6px" top="40%" left="20%" />
      <Sparkle delay="1s" size="10px" top="60%" left="15%" />
      <Sparkle delay="1.5s" size="7px" top="30%" left="80%" />
      <Sparkle delay="2s" size="9px" top="70%" left="85%" />
      <Sparkle delay="2.5s" size="6px" top="50%" left="90%" />
      <Sparkle delay="0.8s" size="8px" top="15%" left="50%" />
      <Sparkle delay="1.8s" size="7px" top="80%" left="60%" />

      <div style={{
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        textAlign: 'left',
        position: 'relative',
        zIndex: 1,
      }}>
        <p style={{ 
          color: '#4ED7F1', 
          fontSize: '1rem', 
          fontWeight: '600', 
          marginBottom: '1rem', 
          letterSpacing: '0.1em',
          textShadow: '0 0 10px rgba(78, 215, 241, 0.3)',
        }}>
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          color: '#0f172a', 
          marginBottom: '1rem', 
          lineHeight: '1.2',
          textShadow: '2px 2px 4px rgba(78, 215, 241, 0.2)',
        }}>
          Chethiya Nisheda Dalugama
        </h1>

        <p style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          background: 'linear-gradient(135deg, #4ED7F1, #6FE6FC, #FFFA8D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '2rem',
        }}>
          Creative Designer & Developer
        </p>

        <p style={{ 
          color: '#334155', 
          fontSize: '1.125rem', 
          marginBottom: '2rem', 
          maxWidth: '35rem',
          lineHeight: '1.8',
        }}>
          I create beautiful, user-friendly digital experiences that help businesses grow.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #4ED7F1, #6FE6FC)',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(78, 215, 241, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(78, 215, 241, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(78, 215, 241, 0.3)';
          }}
          >
            Hire Me
          </button>
          <button style={{
            padding: '1rem 2rem',
            border: '2px solid #4ED7F1',
            color: '#0f172a',
            backgroundColor: 'transparent',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(78, 215, 241, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Download CV
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/ChethiyaD" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #4ED7F1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4ED7F1',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(78, 215, 241, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4ED7F1'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(78, 215, 241, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#4ED7F1'
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(78, 215, 241, 0.2)'
          }}
          title="GitHub"
          >
            <FaGithub style={{ fontSize: '1.25rem' }} />
          </a>
          <a href="https://www.linkedin.com/in/chethiya-dalugama-a32b26313" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #6FE6FC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6FE6FC',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(111, 230, 252, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#6FE6FC'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(111, 230, 252, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#6FE6FC'
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(111, 230, 252, 0.2)'
          }}
          title="LinkedIn"
          >
            <FaLinkedin style={{ fontSize: '1.25rem' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #A8F1FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#A8F1FF',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(168, 241, 255, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#A8F1FF'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(168, 241, 255, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#A8F1FF'
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(168, 241, 255, 0.2)'
          }}
          title="Instagram"
          >
            <FaInstagram style={{ fontSize: '1.25rem' }} />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '2px solid #FFFA8D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFA8D',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(255, 250, 141, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFA8D'
            e.currentTarget.style.color = '#0f172a'
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 250, 141, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#FFFA8D'
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(255, 250, 141, 0.2)'
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
