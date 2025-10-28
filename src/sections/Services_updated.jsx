import { FaFigma, FaCode, FaPalette, FaImage, FaFilm, FaWaveSquare, FaArrowRight } from 'react-icons/fa6'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that delight users',
      icon: FaFigma,
    },
    {
      id: 2,
      title: 'Web Design',
      description: 'Modern, responsive web designs that convert and engage',
      icon: FaCode,
    },
    {
      id: 3,
      title: 'Branding',
      description: 'Complete brand identity and design systems',
      icon: FaPalette,
    },
    {
      id: 4,
      title: 'Graphic Design',
      description: 'Eye-catching graphics for all your visual needs',
      icon: FaImage,
    },
    {
      id: 5,
      title: 'Video Editing',
      description: 'Professional video production and editing services',
      icon: FaFilm,
    },
    {
      id: 6,
      title: 'Motion Graphics',
      description: 'Dynamic animations and motion design solutions',
      icon: FaWaveSquare,
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1a2d4a 50%, #0d1b2a 100%)'
      }}>
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:from-gray-900/80 hover:to-gray-800/60 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-primary-500/20 group-hover:from-orange-500/40 group-hover:to-primary-500/40 transition-all duration-300 transform group-hover:scale-110">
                    <Icon className="text-3xl text-orange-400 group-hover:text-orange-300 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-primary-400 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center text-orange-400 group-hover:text-orange-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn more</span>
                    <FaArrowRight className="ml-2 text-sm" />
                  </div>
                </div>

                {/* Border Gradient on Hover */}
                <div className="absolute inset-0 rounded-xl border border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
