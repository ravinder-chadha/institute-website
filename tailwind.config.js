module.exports = {
  content: ['./Homepg/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'ui-sans-serif', 'system-ui'],
        body: ['Barlow'],
      },
      colors: {
        'dark-purple-70': 'hsla(242, 83%, 7%, 0.7)',
        'dark-purple': 'hsla(242, 83%, 7%, 1)',
      },
      backgroundImage: {
        'number-bg': "url('./Homepg/img/bgnumbers.jpg')",
      },
    },
  },
  plugins: [],
}
