import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  const skills = [
  'Product Strategy',
  'UI/UX Design',
  'Design Systems',
  'Prototyping',
  'User Research'];

  return (
    <section id="about" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-4xl mx-auto">
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
          }}>

          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-12 leading-tight">
            I bridge the gap between functional utility and aesthetic
            perfection.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                With over a decade of experience in digital product design, I
                focus on creating interfaces that are not just beautiful, but
                intuitively functional. My approach is rooted in the belief that
                good design is as little design as possible.
              </p>
              <p>
                I work with founders and product teams who value precision and
                craftsmanship. I don't just color frames; I build systems that
                scale and experiences that last.
              </p>
            </div>

            <div>
              <h3 className="text-text-primary font-medium mb-6">
                Core Capabilities
              </h3>
              <ul className="space-y-4">
                {skills.map((skill, index) =>
                <motion.li
                  key={skill}
                  initial={{
                    opacity: 0,
                    x: -10
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1
                  }}
                  className="flex items-center text-text-secondary border-b border-gray-200 dark:border-graphite pb-3">

                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4" />
                    {skill}
                  </motion.li>
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}