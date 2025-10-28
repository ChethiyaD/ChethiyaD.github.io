import { FaFigma, FaCode, FaPalette, FaImage, FaFilm, FaWaveSquare, FaArrowRight } from 'react-icons/fa6'

export default function Services() {
  const services = [
    { id: 1, title: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces that delight users', icon: FaFigma },
    { id: 2, title: 'Web Design', description: 'Modern, responsive web designs that convert and engage', icon: FaCode },
    { id: 3, title: 'Branding', description: 'Complete brand identity and design systems', icon: FaPalette },
    { id: 4, title: 'Graphic Design', description: 'Eye-catching graphics for all your visual needs', icon: FaImage },
    { id: 5, title: 'Video Editing', description: 'Professional video production and editing services', icon: FaFilm },
    { id: 6, title: 'Motion Graphics', description: 'Dynamic animations and motion design solutions', icon: FaWaveSquare },
  ]

  return (
    <section id="services"
      style={{
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1a2d4a 50%, #0d1b2a 100%)'
      }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            My <span style={{ background: 'linear-gradient(to right, #fb923c, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Services</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Comprehensive design solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} style={{
                position: 'relative',
                padding: '2rem',
                borderRadius: '0.75rem',
                border: '1px solid #374151',
                background: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.3))',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.6))' }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#374151'; e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.3))' }}>
                {/* Icon */}
                <div style={{
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(59, 130, 246, 0.2))',
                  transition: 'all 0.3s ease'
                }}>
                  <Icon style={{ fontSize: '1.875rem', color: '#fed7aa' }} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.75rem',
                  transition: 'all 0.3s ease'
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: '#9ca3af',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  transition: 'color 0.3s ease'
                }}>
                  {service.description}
                </p>

                {/* Arrow */}
                <div style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#fed7aa',
                  opacity: 0,
                  transform: 'translateX(8px)',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Learn more</span>
                  <FaArrowRight style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
