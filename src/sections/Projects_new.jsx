import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Design System UI',
      description: 'A comprehensive design system built with React and Tailwind CSS',
      image: 'https://via.placeholder.com/500x300?text=Design+System',
      tags: ['React', 'Tailwind CSS', 'Design System'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: 'https://via.placeholder.com/500x300?text=E-Commerce',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization',
      image: 'https://via.placeholder.com/500x300?text=Analytics',
      tags: ['React', 'Chart.js', 'Firebase'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Mobile App Design',
      description: 'iOS and Android mobile application UI/UX design',
      image: 'https://via.placeholder.com/500x300?text=Mobile+App',
      tags: ['Figma', 'UI/UX', 'Mobile Design'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Video Editing Suite',
      description: 'Professional video editing and effects application',
      image: 'https://via.placeholder.com/500x300?text=Video+Editing',
      tags: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Brand Identity',
      description: 'Complete brand identity design and guidelines',
      image: 'https://via.placeholder.com/500x300?text=Brand+Identity',
      tags: ['Branding', 'Logo Design', 'Guidelines'],
      liveLink: '#',
      githubLink: '#'
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and projects showcasing design and development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
