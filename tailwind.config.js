/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    fontFamily: {
      primary: ['Inter', 'ui-sans'],
      secondary: ['Merriweather', 'serif'],
      head_primary: ['"Plus Jakarta Sans"', 'sans-serif'],
    },

    extend: {
      borderColor: {
        'blue': '#2463EB',
        'grey': 'rgb(226 232 240 / 80%)',
        // 'light-grey' : 'rgb(229,236,242)',
        'grey-dark': 'rgb(248 250 252 / 1)',
        'green': '#17A34B',  //rgb(23, 163, 75)
      },
      backgroundColor: {
        'blue': '#2463EB',
        'light-blue': '#3B8BF6',
        'light-violet': '#1E40AF',
        'light-green': '#EFFDF4', //rgb(240, 253, 244)
        'transparent-blue': '#EFF6FF',
        'white': '#ffffff',
        'light-cyan': '#DBEAFE', //rgb(219,234,254)
        // 'medium-grey': 'rgb(51 65 85 / 1)',
        'grey': 'rgb(248 250 252 / 1)',
        'common-grey': 'rgb(226 232 240 / 80%)',
      },
      colors: {
        'blue': '#2463EB',
        'dark-grey': '#334155',
        'light-grey': '#64748b', //rgb(110,116,139)
        'common-grey': 'rgb(226 232 240 / 80%)',
        'input-grey': '#94A3B8', //rgb(148,163,184)
        'text-grey': 'rgb(51 65 85 / 1)',
        'text-black': '#0F172A', //rgb(15 23 42)
        'dark-blue': '#2563eb', //rgb(37,99,235)
        'violet': '#9333ea',
        'green': '#17A34B',  //rgb(23, 163, 75)
        'text-light-grey': '#475569', //rgb(71,85,105)
        'text-light-blue': '#1D4ED8'
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
      ,
      fontSize: {
        'base': "1rem",
      },
      // lineHeight : {
      //   lg:"2.5rem",
      // }
      flex: {
        '2': '2 2 0%'
      },
      boxShadow: {
        'tw-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'tw-shadow-colored': '0 10px 15px -3px var(--tw-shadow-color, #000), 0 4px 6px -4px var(--tw-shadow-color, #000)',
      },
      overflowWrap: {
        anywhere: 'anywhere',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      addUtilities({
        '.overflow-wrap-anywhere': {
          'overflow-wrap': 'anywhere',
        },
      });
    },

  ],
  important: true,
}

