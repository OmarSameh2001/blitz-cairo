module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['"Cairo"', 'sans-serif'],
        // optional: make it default
        // sans: ['"Cairo"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
