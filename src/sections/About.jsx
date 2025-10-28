import { FaFigma, FaPencil, FaPalette, FaImage, FaFilm } from 'react-icons/fa6'

export default function About() {
  const skills = [
    { icon: FaFigma, name: 'Figma', percentage: 100, highSkill: true },
    { icon: FaPencil, name: 'Adobe XD', percentage: 100, highSkill: true },
    { icon: FaPalette, name: 'Adobe Photoshop', percentage: 85, highSkill: true },
    { icon: FaImage, name: 'Adobe Illustrator', percentage: 60, highSkill: false },
    { icon: FaFilm, name: 'Adobe Premiere', percentage: 70, highSkill: false },
  ]

  return (
    <section id="about"
      style={{
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2d4a 50%, #0f172a 100%)'
      }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            About <span style={{ background: 'linear-gradient(to right, #fb923c, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Chethiya</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Passionate designer crafting exceptional digital experiences
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Image */}
          <div style={{ order: 2 }}>
            <img src="https://via.placeholder.com/400x500?text=Chethiya+Nisheda" alt="Chethiya Nisheda Dalugama" style={{ width: '100%', maxWidth: '24rem', margin: '0 auto', borderRadius: '1rem', boxShadow: '0 20px 25px rgba(0, 0, 0, 0.5)', border: '2px solid rgba(249, 115, 22, 0.2)', objectFit: 'cover', display: 'block' }} loading="lazy" />
          </div>

          {/* Content */}
          <div style={{ order: 1 }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Who Am I?</h2>
            <p style={{ color: '#d1d5db', fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              I'm a creative professional specializing in UI/UX design and digital experiences. With a passion for crafting beautiful interfaces and solving complex design challenges.
            </p>
            <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              My approach combines aesthetic excellence with user-centered design principles, creating solutions that are both stunning and functional.
            </p>

            <button style={{ padding: '0.75rem 2rem', background: 'linear-gradient(to right, #f97316, #ea580c)', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 15px rgba(249, 115, 22, 0.3)' }} onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 15px 20px rgba(249, 115, 22, 0.5)' }} onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 10px 15px rgba(249, 115, 22, 0.3)' }}>
              <span>⬇</span> Download CV
            </button>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>Skills & Tools</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', borderColor: skill.highSkill ? '#f97316' : '#4b5563', background: skill.highSkill ? 'rgba(249, 115, 22, 0.1)' : 'rgba(75, 85, 99, 0.2)', transition: 'all 0.3s ease' }}>
                      <Icon style={{ fontSize: '1.5rem', color: skill.highSkill ? '#fed7aa' : '#9ca3af' }} />
                      <div style={{ position: 'absolute', top: '-0.5rem', right: '-0.5rem', background: 'linear-gradient(to right, #f97316, #3b82f6)', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '9999px' }}>
                        {skill.percentage}%
                      </div>
                    </div>
                    <p style={{ color: '#e5e7eb', fontWeight: '600', marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem', transition: 'color 0.3s ease' }}>{skill.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
