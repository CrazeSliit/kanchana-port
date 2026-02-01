import React from 'react';
export function Footer() {
  return (
    <footer className="py-5 px-6 border-t border-gray-200 dark:border-graphite bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Kanchana. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <button
            onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            }
            className="hover:text-accent transition-colors">

            Back to Top
          </button>
        </div>
      </div>
    </footer>);

}