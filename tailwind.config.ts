import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
      },
      boxShadow: {
        '3xl': '0 2px 7px 0px rgba(100, 100, 100, 0.3)',
      },
      height: {
        '66px': '66px'
      },
      padding: {
        '15px': '15px',
      },
      fontSize: {
        '15px': '15px',
      },
      colors: {
        primary: "#0090F5",
        secondary: "#E3E3E3",
        white: "#FFFFFF",
        menu: "#494949",
        sousmenu: "#858585",
        green: "#17A351",
        shadow: "#646464",
        lineTop: "#00A6FF",
        lineBottom: "#0084E1",
        borderMenu: "#0569C2",
        gradientTop: "#094694",
        gradientBottom: "#0281E3",
        borderTable: "#C4C4C4"
      }
    },
  },
  plugins: [],
}
export default config
