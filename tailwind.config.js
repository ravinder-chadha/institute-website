module.exports = {
  content: ['./Homepg/*.html'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1300px',
      },
    },
    extend: {
      keyframes: {
        images: {
          '0%': { 'background-image': "url('./img/IMG_0195.JPG')" },
          '33.33%': { 'background-image': "url('./img/IMG_0196.JPG')" },
          '66.66%': { 'background-image': "url('./img/IMG_0198.JPG')" },
          '100%': { 'background-image': "url('./img/IMG_0195.JPG')" },
        },
      },
      animation: {
        'image-slider': 'images 10s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Barlow', 'ui-sans-serif', 'system-ui'],
        body: ['Barlow'],
      },
      colors: {
        'dark-purple': 'hsla(242, 83%, 7%)',
        accent: 'hsla(201, 96%, 32%)',
        'light-purple': 'hsla(242, 83%, 98%)',
        'accent-orange': 'hsla(12, 87%, 56%, 1)',
      },
      backgroundImage: {
        'number-bg': "url('./Homepg/img/bgnumbers.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}
