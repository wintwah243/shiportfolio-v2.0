module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      keyframes: {
        sprinkleFade: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.8' },
          '100%': { transform: 'translate(-50%, -50%) scale(2)', opacity: '0' },
        },
      },
      animation: {
        sprinkleFade: 'sprinkleFade 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
