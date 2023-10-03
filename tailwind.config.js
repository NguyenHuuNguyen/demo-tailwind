/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      width: {
        '1000': '1000px',
        'asad' : '166px'
      },
      fontFamily: {
        'custom-font': ['Poppins', 'sans-serif']
      },
      fontSize: {
        'custom-fontsize': '1.15em'
      }
    }
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}

