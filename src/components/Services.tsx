import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, PenTool, Monitor } from 'lucide-react';
const services = [
{
  icon: Layout,
  title: 'Product Design',
  description:
  'End-to-end product design from discovery to developer handoff. Focused on scalability and user needs.'
},
{
  icon: Smartphone,
  title: 'Mobile App Design',
  description:
  'Native iOS and Android interfaces that feel natural, responsive, and platform-compliant.'
},
{
  icon: PenTool,
  title: 'Design Systems',
  description:
  'Creating robust component libraries and documentation to ensure consistency across your product suite.'
},
{
  icon: Monitor,
  title: 'UI/UX Design',
  description:
  'Crafting intuitive user interfaces and seamless experiences that delight users and drive engagement.'
}];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-bg-primary">
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
          className="mb-16">

          <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
            Services
          </h2>
          <p className="text-text-secondary max-w-xl">
            Specialized offerings for teams that demand excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
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
            whileHover={{
              y: -5
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="p-8 bg-bg-secondary border border-gray-200 dark:border-graphite hover:border-accent transition-colors duration-300 group">

              <service.icon className="w-8 h-8 text-text-primary mb-6 group-hover:text-accent transition-colors duration-300" />
              <h3 className="text-lg font-medium text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}