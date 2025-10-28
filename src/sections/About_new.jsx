import { FaFigma, FaXd, FaPhotoshop, FaIllustrator } from 'react-icons/fa6'
import { SiAdobepremiere } from 'react-icons/si'

export default function About() {
  const skills = [
    { icon: FaFigma, name: 'Figma', percentage: 100, color: 'border-orange-500' },
    { icon: FaXd, name: 'Adobe XD', percentage: 100, color: 'border-orange-500' },
    { icon: FaPhotoshop, name: 'Adobe Photoshop', percentage: 85, color: 'border-orange-500' },
    { icon: FaIllustrator, name: 'Adobe Illustrator', percentage: 60, color: 'border-gray-600' },
    { icon: SiAdobepremiere, name: 'Adobe Premiere', percentage: 70, color: 'border-gray-600' },
  ]

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x500?text=Your+Photo"
                alt="About me"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              User Interface And User Experience And Also Video Editing
            </p>

            {/* Bio Text */}
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.
            </p>

            {/* Download CV Button */}
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors mb-12">
              ⬇ Download CV
            </button>

            {/* Skills */}
            <h3 className="text-2xl font-bold text-white mb-8">Skills & Tools</h3>
            <div className="flex flex-wrap gap-12">
              {skills.map((skill) => {
                const Icon = skill.icon
                const isHighSkill = skill.percentage >= 85
                return (
                  <div key={skill.name} className="flex flex-col items-center">
                    <div className={`w-24 h-24 rounded-full border-4 ${isHighSkill ? 'border-orange-500' : 'border-gray-600'} flex items-center justify-center relative`}>
                      <Icon className={`text-3xl ${isHighSkill ? 'text-orange-500' : 'text-gray-500'}`} />
                      <span className="absolute top-0 right-0 text-xs font-bold text-white">
                        {skill.percentage}%
                      </span>
                    </div>
                    <p className="text-gray-300 font-semibold mt-4 text-center text-sm">{skill.name}</p>
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
