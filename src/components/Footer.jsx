import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ChethiyaD', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/chethiya-dalugama-a32b26313', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' }
  ]

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer style={{ background: '#111827', borderTop: '1px solid #1f2937' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        {/* Main Footer */}
        <div style={{ padding: '3rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
            {/* Brand */}
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>Portfolio</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                Creating beautiful and functional digital experiences
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.3s ease'
                    }} onMouseEnter={(e) => e.target.style.color = '#f97316'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Follow Me</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} style={{
                      padding: '0.75rem',
                      borderRadius: '9999px',
                      background: '#1f2937',
                      color: '#d1d5db',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }} onMouseEnter={(e) => { e.currentTarget.style.background = '#f97316'; e.currentTarget.style.color = 'white' }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1f2937'; e.currentTarget.style.color = '#d1d5db' }} title={social.label}>
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #1f2937', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#9ca3af' }}>
              <p>© {currentYear} Portfolio. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#f97316'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                  Privacy Policy
                </a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#f97316'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
