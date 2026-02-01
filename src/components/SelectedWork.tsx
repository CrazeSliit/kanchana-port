import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
const projects = [
{
  id: 1,
  title: 'FinTech Dashboard',
  category: 'Product Design',
  year: '2023',
  description: 'Modern banking interface with real-time analytics',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  tags: ['UI/UX', 'Dashboard', 'Analytics']
},
{
  id: 2,
  title: 'E-commerce Platform',
  category: 'Web Development',
  year: '2023',
  description: 'Seamless shopping experience with minimal design',
  image:
  'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
  tags: ['E-commerce', 'Responsive', 'Mobile-first']
},
{
  id: 3,
  title: 'SaaS Landing Page',
  category: 'UX/UI Strategy',
  year: '2022',
  description: 'Conversion-focused design for B2B software',
  image:
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200',
  tags: ['Landing Page', 'SaaS', 'Marketing']
},
{
  id: 4,
  title: 'Mobile App Design',
  category: 'Product Design',
  year: '2023',
  description: 'Intuitive health tracking mobile application',
  image:
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
  tags: ['Mobile', 'Health Tech', 'iOS/Android']
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
            className="group cursor-pointer">

              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 aspect-[16/10] mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="bg-white dark:bg-gray-900 text-text-primary px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
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
              </div>

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