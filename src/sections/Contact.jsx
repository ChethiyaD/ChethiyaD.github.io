import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'

export default function Contact() {
  const contactInfo = [
    { icon: FaPhone, title: 'Phone', value: '+94 775 584 110', link: 'tel:+94775584110' },
    { icon: FaEnvelope, title: 'Email', value: 'chethiyanisheda256@gmail.com', link: 'mailto:chethiyanisheda256@gmail.com' },
    { icon: FaLocationDot, title: 'Location', value: 'Kurunegala, Sri Lanka', link: '#' }
  ]

  return (
    <section id="contact" style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0f172a 0%, #1a2d4a 50%, #0d1b2a 100%)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Let's <span style={{ background: 'linear-gradient(to right, #fb923c, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Connect</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Have a project in mind? I'd love to hear from you!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <a key={info.title} href={info.link} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  border: '1px solid #374151',
                  background: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.3))',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f97316' }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#374151' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(59, 130, 246, 0.2))' }}>
                    <Icon style={{ fontSize: '1.5rem', color: '#fed7aa' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '0.25rem' }}>{info.title}</h3>
                    <p style={{ color: '#9ca3af' }}>{info.value}</p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div style={{
            padding: '2rem',
            borderRadius: '0.75rem',
            border: '1px solid #374151',
            background: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.3))'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #4b5563', background: 'rgba(17, 24, 39, 0.5)', color: 'white', fontSize: '1rem' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #4b5563', background: 'rgba(17, 24, 39, 0.5)', color: 'white', fontSize: '1rem' }} />
              <textarea placeholder="Your Message" rows="5" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #4b5563', background: 'rgba(17, 24, 39, 0.5)', color: 'white', fontSize: '1rem', fontFamily: 'inherit', resize: 'none' }}></textarea>
              <button type="submit" style={{ padding: '0.75rem 2rem', background: 'linear-gradient(to right, #f97316, #ea580c)', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)' }} onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
