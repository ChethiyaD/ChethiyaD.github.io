import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default function ProjectCard({ title, description, image, tags, liveLink, githubLink }) {
  return (
    <div className="group h-full rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-800 h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors text-sm"
          >
            Live Demo
            <FaArrowUpRightFromSquare className="text-xs" />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-600 hover:border-orange-500 hover:bg-gray-800 text-gray-300 hover:text-white font-medium transition-colors text-sm"
          >
            GitHub
            <FaGithub className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  )
}
