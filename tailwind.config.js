module.exports = {
  content: ['./Homepg/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'ui-sans-serif', 'system-ui'],
        body: ['Barlow'],
      },
      colors: {
        'dark-purple': 'hsla(242, 83%, 7%)',
        accent: 'hsla(201, 96%, 32%)',
        'light-purple': 'hsla(242, 83%, 98%)',
      },
      backgroundImage: {
        'number-bg': "url('./Homepg/img/bgnumbers.jpg')",
      },
    },
  },
  plugins: [],
}
