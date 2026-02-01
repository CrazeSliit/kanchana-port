import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message. I'll get back to you shortly.");
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-6 bg-bg-primary">
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
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-6">
              Let's work together
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              Currently available for select freelance projects and consulting.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@kanchana.design"
                className="flex items-center text-text-primary hover:text-accent transition-colors">

                <Mail className="w-5 h-5 mr-4" />
                kanchanajayampathi4039@gmail.com              </a>
              <div className="flex gap-6 pt-6">
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent transition-colors">

                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent transition-colors">

                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-text-secondary hover:text-accent transition-colors">

                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2">
            <Input label="Name" placeholder="John Doe" required />
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              required />

            <Input
              label="Message"
              multiline
              placeholder="Tell me about your project..."
              required />

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto">

                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>);

}