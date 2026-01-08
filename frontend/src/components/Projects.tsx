import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Layout } from 'lucide-react';
import Magnet from './Magnet';


const projects = [
  {
    id: 1,
    title: 'AI Thumbnail Maker',
    description: 'A full-stack AI-powered thumbnail generation platform that enables users to create high-quality YouTube and social media thumbnails using Hugging Face AI models. Built with a modern, responsive UI, real-time preview, and prompt-based image generation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Hugging Face API'],
    icon: Layout,
    github: 'https://github.com/Piyush-13090/Thumbnail.go',
    live: 'https://thumbnail-go.vercel.app/',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Forever',
    description: 'A modern front-end fashion e-commerce platform featuring a clean UI and smooth user experience built using React.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    icon: Smartphone,
    github: 'https://github.com/Piyush-13090/Forever',
    live: 'https://forever-navy-nine.vercel.app/',
    color: 'from-pink-500 to-purple-500',
  }

];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-500 mb-4 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in web development,
            from responsive designs to fully functional applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass hover:glow-gradient transition-all duration-500 h-full flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                {/* Icon overlay */}
                <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${project.color} opacity-90`}>
                  <project.icon size={20} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-zinc-800/50">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <style>{`
            .view-all-btn {
              position: relative;
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 16px 32px;
              border-radius: 50px;
              background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
              background-size: 200% 200%;
              color: white;
              font-weight: 600;
              font-size: 16px;
              text-decoration: none;
              box-shadow: 0 4px 20px rgba(106, 17, 203, 0.4), 0 0 40px rgba(37, 117, 252, 0.2);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              overflow: hidden;
            }
            
            .view-all-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
              transition: left 0.5s ease;
            }
            
            .view-all-btn:hover {
              transform: scale(1.05);
              box-shadow: 0 8px 40px rgba(124, 58, 237, 0.4), 0 0 60px rgba(79, 70, 229, 0.2);
              background-position: 100% 0;
            }
            
            .view-all-btn:hover::before {
              left: 100%;
            }
            
            .view-all-btn:active {
              transform: scale(0.98);
            }
            
            .view-all-btn .icon {
              transition: transform 0.3s ease;
            }
            
            .view-all-btn:hover .icon {
              transform: translateX(4px);
            }
          `}</style>
          <Magnet padding={50} disabled={false} magnetStrength={50}>
            <a
              href="https://github.com/Piyush-13090?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="view-all-btn"
            >
              View All Projects
              <ExternalLink size={18} className="icon" />
            </a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
}
