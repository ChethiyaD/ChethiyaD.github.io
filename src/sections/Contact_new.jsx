import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa6'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+94 775 584 110',
      link: 'tel:+94775584110'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'chethiyanisheda256@gmail.com',
      link: 'mailto:chethiyanisheda256@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Kurunegala, Sri Lanka',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-start gap-4 p-6 rounded-xl border border-gray-700 hover:border-orange-500 hover:bg-gray-900/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="text-2xl text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-gray-400 hover:text-orange-500 transition-colors">{info.value}</p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl border border-gray-700 bg-gray-900/50">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
