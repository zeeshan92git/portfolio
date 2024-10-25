/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontSize: {
        '6xl': ['3.5rem', {
          lineHeight: '1',
        }],
      },
      keyframes: {
        fadeInOut: {
          '0%': {
            opacity: '0.5',            // Start with 50% opacity
            transform: 'scale(0.8)',   // Start slightly smaller than normal
          },
          '25%': {
            opacity: '1',              // Fully visible
            transform: 'scale(1.1)',   // Slightly larger
          },
          '50%': {
            opacity: '1',              // Still fully visible
            transform: 'scale(1.3)',   // Scale up significantly
          },
          '75%': {
            opacity: '1',              // Fully visible
            transform: 'scale(1.1)',   // Scale down slightly
          },
          '100%': {
            opacity: '0.5',            // Fade out to 50% opacity
            transform: 'scale(0.8)',   // Return to slightly smaller
          },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s ease-in-out  infinite',
      },
    },
    fontFamily: {
      myfont: ["Rubik", 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',

    },
  },
  plugins: [],
}

