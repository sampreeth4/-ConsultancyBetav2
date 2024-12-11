/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add these custom utilities
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        'custom': '1000px',
      },
      transitionProperty: {
        '3d': 'transform',
      }
    },
  },
  plugins: [
    // Custom plugin to add additional utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
        '.perspective-custom': {
          'perspective': '1000px',
        }
      }
      
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}