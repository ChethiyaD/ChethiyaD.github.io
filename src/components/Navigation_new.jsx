import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa6'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: 'home', label: 'Home', offset: -80 },
    { to: 'about', label: 'About', offset: -80 },
    { to: 'services', label: 'Services', offset: -80 },
    { to: 'projects', label: 'Projects', offset: -80 },
    { to: 'contact', label: 'Contact', offset: -80 }
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl md:text-3xl font-bold text-white hover:text-orange-500 transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                offset={link.offset}
                smooth
                className="text-gray-300 hover:text-orange-500 font-medium transition-colors cursor-pointer"
                activeClass="text-orange-500"
              >
                {link.label}
              </ScrollLink>
            ))}
            <button className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-orange-500 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  offset={link.offset}
                  smooth
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-800 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <button className="w-full px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
