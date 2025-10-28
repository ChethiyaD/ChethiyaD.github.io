import { Link as ScrollLink } from 'react-scroll'
import { FaInstagram, FaSquareBehance, FaDribbble } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden pt-16 pb-24"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-up">
          {/* Tagline */}
          <p className="text-gray-400 text-lg md:text-xl font-semibold mb-4">
            Hi I am
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {/* REPLACE WITH YOUR NAME */}
            Mahmood Fazile
          </h1>

          {/* Title */}
          <p className="text-4xl md:text-5xl font-bold text-primary-500 mb-8">
            {/* REPLACE WITH YOUR TITLE */}
            UI/UX designer
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors active:scale-95 shadow-lg">
              Hire Me
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-lg hover:border-primary-500 transition-colors active:scale-95">
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:border-primary-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:border-primary-400 transition-colors">
              <FaSquareBehance />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:border-primary-400 transition-colors">
              <FaDribbble />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:border-primary-400 transition-colors">
              <FaSquareBehance />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <div className="w-full max-w-sm mx-auto">
            <img
              src="https://via.placeholder.com/400x500?text=Your+Photo"
              alt="Profile"
              className="w-full h-auto rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Stats Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark bg-opacity-80 backdrop-blur py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-orange-500">5+</p>
            <p className="text-gray-400 text-sm mt-1">Experiences</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">20+</p>
            <p className="text-gray-400 text-sm mt-1">Project done</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">80+</p>
            <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
