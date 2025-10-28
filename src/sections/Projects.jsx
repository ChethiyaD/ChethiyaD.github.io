export default function Projects() {
  const projects = [
    { id: 1, title: 'Design System UI', description: 'A comprehensive design system built with React and Tailwind CSS', image: 'https://via.placeholder.com/500x300?text=Design+System', tags: ['React', 'Tailwind CSS', 'Design System'], liveLink: '#', githubLink: '#' },
    { id: 2, title: 'E-Commerce Platform', description: 'Full-stack e-commerce solution with payment integration', image: 'https://via.placeholder.com/500x300?text=E-Commerce', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], liveLink: '#', githubLink: '#' },
    { id: 3, title: 'Analytics Dashboard', description: 'Real-time analytics dashboard with data visualization', image: 'https://via.placeholder.com/500x300?text=Analytics', tags: ['React', 'Chart.js', 'Firebase'], liveLink: '#', githubLink: '#' },
    { id: 4, title: 'Mobile App Design', description: 'iOS and Android mobile application UI/UX design', image: 'https://via.placeholder.com/500x300?text=Mobile+App', tags: ['Figma', 'UI/UX', 'Mobile Design'], liveLink: '#', githubLink: '#' },
    { id: 5, title: 'Video Editing Suite', description: 'Professional video editing and effects application', image: 'https://via.placeholder.com/500x300?text=Video+Editing', tags: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve'], liveLink: '#', githubLink: '#' },
    { id: 6, title: 'Brand Identity', description: 'Complete brand identity design and guidelines', image: 'https://via.placeholder.com/500x300?text=Brand+Identity', tags: ['Branding', 'Logo Design', 'Guidelines'], liveLink: '#', githubLink: '#' }
  ]

  return (
    <section id="projects" style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2d4a 50%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Featured <span style={{ background: 'linear-gradient(to right, #fb923c, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Explore my latest work showcasing design excellence and technical skill
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {projects.map((project) => (
            <div key={project.id} style={{
              borderRadius: '0.75rem',
              border: '1px solid #374151',
              overflow: 'hidden',
              background: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.3))',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f97316'; e.currentTarget.style.transform = 'translateY(-5px)' }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#374151'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '0.75rem', color: '#fed7aa', backgroundColor: 'rgba(249, 115, 22, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.liveLink} style={{ color: '#fed7aa', fontSize: '0.875rem', fontWeight: '600', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#fbbf24'} onMouseLeave={(e) => e.target.style.color = '#fed7aa'}>Live Demo</a>
                  <a href={project.githubLink} style={{ color: '#fed7aa', fontSize: '0.875rem', fontWeight: '600', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#fbbf24'} onMouseLeave={(e) => e.target.style.color = '#fed7aa'}>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
