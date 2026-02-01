import React, { useMemo, useEffect } from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../hooks/useTheme';

export function Hero() {
  const { theme } = useTheme();
  const [init, setInit] = React.useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: theme === 'dark' ? '#ffffff' : '#000000',
      },
      links: {
        color: theme === 'dark' ? '#ffffff' : '#000000',
        
        distance: 150,
        enable: true,
        opacity: theme === 'dark' ? 0.5 : 0.9,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: theme === 'dark' ? 0.3 : 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [theme]);

  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={particlesOptions}
        />
      )}

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="space-y-6 order-2 md:order-1 text-center md:text-left">

          {/* Name */}
          <h1 className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] relative">
            <span className="bg-gradient-to-r from-[var(--text-primary)] via-[#c41e3a] to-[var(--text-primary)] bg-clip-text text-transparent animate-gradient">
              KANCHANA
            </span>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-[#c41e3a] to-transparent rounded-full" />
          </h1>

          {/* Title */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#c41e3a]" />
            <p className="text-lg md:text-xl font-medium tracking-wide">
              <span className="text-[var(--text-secondary)]">UI UX</span>
              <span className="text-[#c41e3a] ml-2 font-semibold">Designer</span>
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#c41e3a]" />
          </motion.div>

          {/* Statement */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative max-w-md mx-auto md:mx-0">
            <div className="absolute -left-4 top-0 text-4xl text-[#c41e3a] opacity-30 font-serif leading-none">"</div>
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed pl-4 border-l-2 border-[#c41e3a]/30 italic">
              Designing interfaces with <span className="text-[var(--text-primary)] font-medium not-italic">clarity</span>, <span className="text-[var(--text-primary)] font-medium not-italic">restraint</span>, and <span className="text-[var(--text-primary)] font-medium not-italic">intent</span>.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">

            <Button
              onClick={() =>
              document.getElementById('work')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View Selected Work
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })
              }
              className="group">
              <span className="flex items-center gap-2">
                Get in Touch
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative order-1 md:order-2 flex justify-center md:justify-end">

          <div className="relative group">
            {/* Red accent line - visible on hover */}
            <div className="absolute -left-3 top-8 bottom-8 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            {/* Image container */}
            <div className="relative w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] aspect-[3/4] overflow-hidden rounded-lg shadow-2xl shadow-black/20 dark:shadow-black/40">
              <motion.img
                src="/Untitled_design_(10).png"
                alt="Kanchana - Web Designer"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-[50%] transition-all duration-700 ease-out group-hover:scale-[1.03]" />

            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.6,
          delay: 1
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

        <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 6, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>

          <ChevronDown className="w-5 h-5 text-[var(--text-secondary)]" />
        </motion.div>
      </motion.div>
    </section>);

}