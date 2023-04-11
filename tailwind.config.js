/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'daheng' : ['Daheng', 'sans-serif'],
        'dimibang' : ['dimibang_new', 'sans-serif'],
        'samlip' : ['SDSamliphopangche_Outline', 'sans-serif'],
        'katuri' : ['Katuri', 'sans-serif'],
        'classic' : ['classic'],
        'alice' : ['EliceDigitalBaeum_Bold'],
        'preten' : ['Pretendard'],
        'jua' : ['BMJUA'],
      },
      screens: {
        // 'mobile' : '640px',
        'mobile' : {'max': '640px'},
      },
      transitionProperty: {
        'left' : 'left',
      }
    },
  },
  plugins: [],
}

