import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
const projects = [
{
  id: 1,
  title: 'Business Portfolio',
  category: 'Web Design',
  year: '2024',
  description: 'Professional portfolio layout for a modern brand.',
  image: '/bussnuss portfolio.png',
  tags: ['Portfolio', 'Branding', 'UI/UX']
},
{
  id: 2,
  title: 'Hospital Management System',
  category: 'Web Application',
  year: '2024',
  description: 'Streamlined hospital operations and patient records.',
  image: '/hostital management systeem.png',
  tags: ['Dashboard', 'Healthcare', 'Admin']
},
{
  id: 3,
  title: 'Call Support Center',
  category: 'Web Application',
  year: '2024',
  description: 'Agent-friendly interface for support workflows.',
  image: '/Call support center.png',
  tags: ['Support', 'CRM', 'Productivity']
},
{
  id: 4,
  title: 'Student Learning System',
  category: 'Education Platform',
  year: '2024',
  description: 'Learning portal with clear progress tracking.',
  image: '/studnt lerning systeem .png',
  tags: ['EdTech', 'LMS', 'UX']
},
{
  id: 5,
  title: 'Travel Guide Website',
  category: 'Marketing Site',
  year: '2024',
  description: 'Inspiring travel stories with rich visuals.',
  image: '/travel guide website.png',
  tags: ['Travel', 'Content', 'Web']
}];

export function SelectedWork() {
  return (
    <section id="work" className="py-32 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-20">

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#c41e3a]" />
            <span className="text-sm uppercase tracking-widest text-[#c41e3a] font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            A curated collection of projects showcasing design excellence and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) =>
          <motion.article
            key={project.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: "-100px"
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15
            }}
            className="group">

              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 aspect-[16/10] mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    <span className="font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Image */}
                <motion.img
                  whileHover={{
                    scale: 1.08
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover" />

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-text-primary z-10">
                  {project.year}
                </div>
              </a>

              <div className="space-y-4">
                {/* Category */}
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#c41e3a] font-semibold">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-[#c41e3a] transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary mb-2 group-hover:text-[#c41e3a] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) =>
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-text-secondary border border-gray-200 dark:border-gray-700">
                      {tag}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          )}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.6
          }}
          className="mt-16 text-center">

          <a
            href="#"
            className="inline-flex items-center gap-2 text-text-primary hover:text-[#c41e3a] transition-colors duration-300 group/link">

            <span className="text-lg font-medium">View All Projects</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>);

}